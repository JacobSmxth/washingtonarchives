'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { battleLocations, BattleLocation } from '@/data/battleLocations';
import { MapPin, X, Calendar, Target } from 'lucide-react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./MapboxMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-white rounded-2xl border-2 border-museum-gold/20 flex items-center justify-center shadow-lg" style={{ minHeight: '500px' }}>
      <div className="text-center space-y-4">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-museum-navy border-t-transparent"></div>
        <p className="font-body text-museum-sepia text-lg">Loading interactive map...</p>
      </div>
    </div>
  )
});

export default function BattleMap() {
  const [selectedBattle, setSelectedBattle] = useState<BattleLocation | null>(null);
  const [filter, setFilter] = useState<'all' | 'french-indian' | 'revolutionary'>('all');
  const [mounted, setMounted] = useState(false);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Delay map loading - load after other content
    const timer = setTimeout(() => {
      setShouldLoadMap(true);
    }, 1500); // Wait 1.5 seconds before loading map

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] bg-white rounded-2xl border-2 border-museum-gold/20 flex items-center justify-center shadow-lg" style={{ minHeight: '500px' }}>
        <div className="text-center space-y-4">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-museum-navy border-t-transparent"></div>
          <p className="font-body text-museum-sepia text-lg">Initializing map...</p>
        </div>
      </div>
    );
  }

  const filteredBattles = battleLocations.filter(
    battle => filter === 'all' || battle.war === filter
  );

  const getResultColor = (result: string) => {
    switch (result) {
      case 'victory': return 'bg-green-500';
      case 'defeat': return 'bg-red-500';
      case 'inconclusive': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            filter === 'all'
              ? 'bg-museum-navy text-white'
              : 'bg-white text-museum-ink border border-museum-navy/20 hover:bg-museum-navy/10'
          }`}
        >
          All Battles ({battleLocations.length})
        </button>
        <button
          onClick={() => setFilter('french-indian')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            filter === 'french-indian'
              ? 'bg-museum-navy text-white'
              : 'bg-white text-museum-ink border border-museum-navy/20 hover:bg-museum-navy/10'
          }`}
        >
          French & Indian War ({battleLocations.filter(b => b.war === 'french-indian').length})
        </button>
        <button
          onClick={() => setFilter('revolutionary')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            filter === 'revolutionary'
              ? 'bg-museum-navy text-white'
              : 'bg-white text-museum-ink border border-museum-navy/20 hover:bg-museum-navy/10'
          }`}
        >
          Revolutionary War ({battleLocations.filter(b => b.war === 'revolutionary').length})
        </button>
      </div>

      <div 
        className="bg-white rounded-2xl shadow-lg border-2 border-museum-gold/20 overflow-hidden" 
        style={{ 
          height: '500px',
          minHeight: '500px',
          width: '100%',
          position: 'relative'
        }}
      >
        {shouldLoadMap ? (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Map battles={filteredBattles} onBattleClick={setSelectedBattle} />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ height: '500px' }}>
            <div className="text-center space-y-4">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-museum-navy border-t-transparent"></div>
              <p className="font-body text-museum-sepia text-lg">Loading map...</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-museum-sepia/80 italic">
          Note: This map shows major battles where Washington played a significant role. It does not include every engagement or skirmish.
          I've done my best to verify locations and avoid misinformation while keeping the map performant.
        </p>
      </div>

      <div className="mt-6 bg-white rounded-2xl shadow-lg border-2 border-museum-gold/20 p-6">
        <h3 className="font-display text-2xl font-semibold text-museum-ink mb-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-museum-navy" />
          All Battles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBattles.map((battle, index) => (
            <motion.button
              key={battle.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => setSelectedBattle(battle)}
              className="text-left p-4 bg-gradient-to-br from-museum-parchment/30 to-white rounded-xl border-2 border-museum-gold/20 hover:border-museum-gold hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className={`w-4 h-4 rounded-full ${getResultColor(battle.result)} shrink-0 mt-1 group-hover:scale-125 transition-transform`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-display font-bold text-base text-museum-ink">
                      {battle.name}
                    </h4>
                    <span className="font-semibold text-sm text-museum-navy shrink-0">
                      {battle.year}
                    </span>
                  </div>
                  <p className="text-sm text-museum-sepia line-clamp-2 mb-2">
                    {battle.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${
                      battle.result === 'victory'
                        ? 'bg-green-100 text-green-700'
                        : battle.result === 'defeat'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {battle.result}
                    </span>
                    <span className="text-xs text-museum-sepia">
                      vs. {battle.opponent}
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBattle && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setSelectedBattle(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-museum-gold/20">
                <div className={`${getResultColor(selectedBattle.result)} text-white p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="font-display text-xl font-bold">
                          {selectedBattle.year}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl font-bold mb-2">
                        {selectedBattle.name}
                      </h2>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <Target className="w-4 h-4" />
                        <span className="capitalize">{selectedBattle.result}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedBattle(null)}
                      className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-sm font-semibold text-museum-sepia uppercase mb-2">
                      Opponent
                    </h3>
                    <p className="font-body text-base text-museum-ink">
                      {selectedBattle.opponent}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-semibold text-museum-sepia uppercase mb-2">
                      Description
                    </h3>
                    <p className="font-body text-base text-museum-ink leading-relaxed">
                      {selectedBattle.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-semibold text-museum-sepia uppercase mb-2">
                      Coordinates
                    </h3>
                    <p className="font-mono text-sm text-museum-sepia">
                      {selectedBattle.coordinates[0].toFixed(4)}°N, {Math.abs(selectedBattle.coordinates[1]).toFixed(4)}°W
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
