'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { BattleLocation } from '@/data/battleLocations';
import 'mapbox-gl/dist/mapbox-gl.css';

// grabbing the api key from env file
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

if (!MAPBOX_TOKEN) {
  console.error('forgot to set the mapbox token lol');
}

interface MapboxMapProps {
  battles: BattleLocation[];
  onBattleClick: (battle: BattleLocation) => void;
}

export default function MapboxMap({ battles, onBattleClick }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const userZoomedRef = useRef(false);
  const handleResizeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Wait for container to have dimensions before initializing
    const checkDimensions = () => {
      if (!mapContainer.current) return false;
      const rect = mapContainer.current.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    };

    // Function to wait for dimensions and then initialize
    const waitAndInitialize = (attempts = 0) => {
      if (map.current) return; // Already initialized
      if (!mapContainer.current) return;

      if (checkDimensions()) {
        initializeMap();
      } else if (attempts < 10) {
        // Try again after a short delay, up to 10 attempts
        setTimeout(() => waitAndInitialize(attempts + 1), 100);
      }
    };

    // Additional delay before initializing map - helps with performance
    const initTimer = setTimeout(() => {
      if (!mapContainer.current || map.current) return;
      waitAndInitialize();
    }, 500); // Initial 500ms delay

    const initializeMap = () => {
      if (!mapContainer.current || map.current) return;

      if (!MAPBOX_TOKEN) {
        setMapError('need to add the mapbox token');
        console.error('mapbox token missing');
        return;
      }
      mapboxgl.accessToken = MAPBOX_TOKEN;

      // figuring out the map boundaries to fit all the battle markers
      let bounds: mapboxgl.LngLatBounds | null = null;
      if (battles.length > 0) {
        bounds = new mapboxgl.LngLatBounds();
        battles.forEach(battle => {
          bounds!.extend([battle.coordinates[1], battle.coordinates[0]]);
        });
      }

      const mapConfig: mapboxgl.MapboxOptions = {
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
      };

      if (bounds) {
        mapConfig.bounds = bounds;
        mapConfig.fitBoundsOptions = { padding: 50 };
      } else {
        mapConfig.center = [-76.0, 40.0];
        mapConfig.zoom = 6;
      }

      map.current = new mapboxgl.Map(mapConfig);

      map.current.on('load', () => {
        setMapLoaded(true);
        // Force resize multiple times to ensure it fills container
        const forceResize = () => {
          if (map.current && mapContainer.current) {
            const width = mapContainer.current.offsetWidth;
            const height = mapContainer.current.offsetHeight;
            if (width > 0 && height > 0) {
              map.current.resize();
            }
          }
        };
        
        // Immediate resize
        forceResize();
        
        // Multiple delayed resizes to catch any layout changes
        setTimeout(forceResize, 10);
        setTimeout(forceResize, 50);
        setTimeout(forceResize, 100);
        setTimeout(forceResize, 200);
        setTimeout(forceResize, 500);
      });

      map.current.on('error', (e) => {
        setMapError('map broke, probably the api key');
        console.error('Mapbox error:', e);
      });

      // Simple window resize handler
      const handleResize = () => {
        if (map.current) {
          map.current.resize();
        }
      };
      handleResizeRef.current = handleResize;
      window.addEventListener('resize', handleResize);
    };

    // Cleanup on unmount
    return () => {
      clearTimeout(initTimer);
      if (handleResizeRef.current) {
        window.removeEventListener('resize', handleResizeRef.current);
      }
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Update markers when battles change
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    // Remove existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers
    battles.forEach(battle => {
      const getResultColor = (result: string) => {
        switch (result) {
          case 'victory': return '#10b981'; // green
          case 'defeat': return '#ef4444'; // red
          case 'inconclusive': return '#eab308'; // yellow
          default: return '#6b7280'; // gray
        }
      };

      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.cssText = `
        width: 24px;
        height: 24px;
        background-color: ${getResultColor(battle.result)};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        cursor: pointer;
      `;

      // Create popup content
      const popupContent = document.createElement('div');
      popupContent.className = 'p-2';
      
      const title = document.createElement('h3');
      title.className = 'font-bold text-sm mb-1';
      title.textContent = battle.name;
      
      const year = document.createElement('p');
      year.className = 'text-xs text-gray-600 mb-1';
      year.textContent = battle.year;
      
      const resultContainer = document.createElement('p');
      resultContainer.className = 'text-xs capitalize';
      
      const resultSpan = document.createElement('span');
      resultSpan.className = `font-semibold ${
        battle.result === 'victory' ? 'text-green-600' :
        battle.result === 'defeat' ? 'text-red-600' :
        'text-yellow-600'
      }`;
      resultSpan.textContent = battle.result;
      
      resultContainer.appendChild(resultSpan);
      popupContent.appendChild(title);
      popupContent.appendChild(year);
      popupContent.appendChild(resultContainer);

      const popup = new mapboxgl.Popup({ offset: 12 })
        .setDOMContent(popupContent);

      const marker = new mapboxgl.Marker(el)
        .setLngLat([battle.coordinates[1], battle.coordinates[0]]) // Mapbox uses [lng, lat]
        .setPopup(popup)
        .addTo(map.current!);

      // Add click handler - zoom into the marker location
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        userZoomedRef.current = true;
        if (map.current) {
          // Zoom into the clicked marker location
          map.current.flyTo({
            center: [battle.coordinates[1], battle.coordinates[0]],
            zoom: 10,
            duration: 800,
            essential: true
          });
        }
        onBattleClick(battle);
        // Reset flag after animation completes
        setTimeout(() => {
          userZoomedRef.current = false;
        }, 1000);
      });

      markersRef.current.push(marker);
    });

    // Only fit bounds when battles list changes (filtering), not when user clicks markers
    const shouldFitBounds = battles.length > 0 && map.current && mapLoaded && !userZoomedRef.current;
    if (shouldFitBounds) {
      const bounds = new mapboxgl.LngLatBounds();
      battles.forEach(battle => {
        bounds.extend([battle.coordinates[1], battle.coordinates[0]]);
      });
      
      // Only fit bounds if zoomed out (user hasn't manually zoomed in)
      const currentZoom = map.current.getZoom();
      if (currentZoom < 8) {
        map.current.fitBounds(bounds, { 
          padding: 50,
          duration: 1000,
          maxZoom: 8 // Don't zoom too far in when fitting all battles
        });
      }
    }
  }, [battles, mapLoaded, onBattleClick]);

  if (mapError) {
    return (
      <div 
        className="w-full h-full bg-white rounded-2xl border-2 border-red-200 flex items-center justify-center"
        style={{ 
          minHeight: '500px',
          padding: '2rem'
        }}
      >
        <div className="text-center space-y-2 max-w-md">
          <p className="font-body text-red-600 font-semibold">Map Loading Error</p>
          <p className="font-body text-sm text-museum-sepia">{mapError}</p>
          <p className="font-body text-xs text-museum-sepia mt-4">
            See README.md for setup instructions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapContainer}
      className="w-full h-full"
      style={{ 
        width: '100%',
        height: '100%',
        minHeight: '500px',
        position: 'relative'
      }}
    />
  );
}

