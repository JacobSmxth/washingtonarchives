'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, BookOpen, Archive, Filter, Search, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sourcesDatabase, getUniqueTypes, getUniqueTags, searchSources, type Source } from '@/data/sources';

interface SourcesPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const sourceTypeColors = {
  "Primary Source": "bg-blue-100 text-blue-800",
  "Secondary Source": "bg-purple-100 text-purple-800",
  "Museum Resource": "bg-green-100 text-green-800",
  "Historical Analysis": "bg-orange-100 text-orange-800",
  "Educational Resource": "bg-yellow-100 text-yellow-800",
  "Reference Work": "bg-gray-100 text-gray-800",
  "Official Government Source": "bg-blue-100 text-blue-800"
};

const reliabilityColors = {
  "High": "bg-green-100 text-green-800 border-green-200",
  "Medium": "bg-yellow-100 text-yellow-800 border-yellow-200", 
  "Low": "bg-red-100 text-red-800 border-red-200"
};

export default function SourcesPage({ isOpen, onClose }: SourcesPageProps) {
  const [selectedType, setSelectedType] = useState<Source['type'] | 'all'>('all');
  const [selectedTag, setSelectedTag] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'title' | 'type' | 'reliability'>('reliability');

  const pageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  const getFilteredSources = (): Source[] => {
    let filtered = sourcesDatabase;

    if (searchQuery.trim()) {
      filtered = searchSources(searchQuery);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(source => source.type === selectedType);
    }

    if (selectedTag !== 'all') {
      filtered = filtered.filter(source => source.tags.includes(selectedTag));
    }
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'type':
          return a.type.localeCompare(b.type);
        case 'reliability':
          const reliabilityOrder = { 'High': 0, 'Medium': 1, 'Low': 2 };
          return reliabilityOrder[a.reliability] - reliabilityOrder[b.reliability];
        default:
          return 0;
      }
    });
  };

  const filteredSources = getFilteredSources();
  const primarySources = filteredSources.filter(source => source.type === 'Primary Source');
  const secondarySources = filteredSources.filter(source => source.type !== 'Primary Source');

  const uniqueTypes = getUniqueTypes();
  const uniqueTags = getUniqueTags();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 overflow-y-auto">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden overflow-x-hidden"
        >
          
          <div className="bg-gradient-to-r from-museum-navy to-museum-navy-dark text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Archive className="w-8 h-8" />
                <div>
                  <h1 className="text-2xl font-display font-bold">Sources & References</h1>
                  <p className="text-white/80 text-sm">
                    Comprehensive bibliography for WashingtonArchive.org
                  </p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            
            <div className="mt-6 space-y-4">
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                <input
                  type="text"
                  placeholder="Search sources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/80">
                  Showing {filteredSources.length} of {sourcesDatabase.length} sources
                </div>
                <motion.button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Filter className="w-4 h-4" />
                  <span className="text-sm">Filters</span>
                </motion.button>
              </div>

              
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden"
                  >
                    
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">Source Type</label>
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value as Source['type'] | 'all')}
                        className="w-full p-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        <option value="all" className="text-gray-900">All Types</option>
                        {uniqueTypes.map(type => (
                          <option key={type} value={type} className="text-gray-900">{type}</option>
                        ))}
                      </select>
                    </div>

                    
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">Topic Tag</label>
                      <select
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(e.target.value)}
                        className="w-full p-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        <option value="all" className="text-gray-900">All Topics</option>
                        {uniqueTags.map(tag => (
                          <option key={tag} value={tag} className="text-gray-900 capitalize">
                            {tag.replace('-', ' ')}
                          </option>
                        ))}
                      </select>
                    </div>

                    
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">Sort By</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'title' | 'type' | 'reliability')}
                        className="w-full p-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        <option value="reliability" className="text-gray-900">Reliability (High to Low)</option>
                        <option value="title" className="text-gray-900">Title (A-Z)</option>
                        <option value="type" className="text-gray-900">Type</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          
          <div className="p-6 overflow-y-auto overflow-x-hidden max-h-[calc(90vh-300px)]">
            <div className="space-y-8">
              
              {primarySources.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <BookOpen className="w-6 h-6 text-museum-navy" />
                    <h2 className="text-2xl font-display font-bold text-museum-ink">
                      Primary Sources ({primarySources.length})
                    </h2>
                  </div>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {primarySources.map((source, index) => (
                      <SourceCard key={source.id} source={source} index={index} />
                    ))}
                  </div>
                </motion.section>
              )}

              
              {secondarySources.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <Archive className="w-6 h-6 text-museum-navy" />
                    <h2 className="text-2xl font-display font-bold text-museum-ink">
                      Secondary Sources & References ({secondarySources.length})
                    </h2>
                  </div>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {secondarySources.map((source, index) => (
                      <SourceCard key={source.id} source={source} index={index} />
                    ))}
                  </div>
                </motion.section>
              )}

              
              {filteredSources.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Archive className="w-16 h-16 text-museum-sepia mx-auto mb-4" />
                  <h3 className="text-xl font-display font-semibold text-museum-ink mb-2">
                    No sources found
                  </h3>
                  <p className="text-museum-sepia">
                    Try adjusting your search terms or filters.
                  </p>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-museum-navy/5 to-museum-gold/5 p-6 rounded-xl border border-museum-navy/20 mt-8"
            >
              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-museum-navy mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-museum-ink mb-2">
                    Research Methodology
                  </h3>
                  <p className="text-museum-sepia text-sm leading-relaxed">
                    I did way too much research using the <a 
                      href="https://founders.archives.gov/?q=%20Author%3A%22Washington%2C%20George%22" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-museum-navy hover:text-museum-navy-light font-medium underline"
                    >
                      Founders Online database
                    </a>, which contains over 31,000 searchable documents authored by George Washington. 
                    This is my project for HIST 2111, and I hope my time doesn&apos;t go unnoticed. I explored 
                    both his achievements and contradictions as a man of his time.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 mt-4"
            >
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-museum-ink mb-2">
                    Source Reliability Note
                  </h3>
                  <p className="text-museum-sepia text-sm leading-relaxed">
                    This is a student project for HIST 2111, so some sources may vary in reliability. 
                    Wikipedia and general websites should be cross-referenced with more authoritative sources. 
                    Primary sources from the National Archives and established institutions like Mount Vernon 
                    are generally most reliable. Always double-check information for your own research.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          <div className="px-8 py-4 bg-museum-parchment border-t border-museum-navy/10">
            <div className="flex items-center justify-between text-sm text-museum-sepia">
              <span>Total Sources: {sourcesDatabase.length}</span>
              <span>Created for HIST 2111 to show off George Washington. I did so much research because I thought if I was making a website, I should make it portfolio worthy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function SourceCard({ source, index }: { source: Source; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl p-6 shadow-museum border border-museum-navy/10 hover:shadow-museum-hover transition-all group overflow-hidden"
    >
      <div className="mb-3 space-y-3">
        <div className="w-full">
          <motion.a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-lg font-semibold text-museum-ink group-hover:text-museum-navy transition-colors break-words flex items-start gap-2"
            whileHover={{ scale: 1.01 }}
          >
            <span className="flex-1">{source.title}</span>
            <ExternalLink className="w-4 h-4 text-museum-sepia group-hover:text-museum-navy flex-shrink-0 mt-1" />
          </motion.a>
          <p className="text-sm text-museum-navy font-medium mt-1 break-words">
            {source.source}
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <span className={cn(
            "px-2 py-1 rounded-full text-xs font-medium border",
            reliabilityColors[source.reliability]
          )}>
            {source.reliability} <span className="hidden sm:inline">Reliability</span>
          </span>
          <span className={cn(
            "px-2 py-1 rounded-full text-xs font-medium",
            sourceTypeColors[source.type] || "bg-gray-100 text-gray-800"
          )}>
            {source.type}
          </span>
        </div>
      </div>
      
      <p className="text-museum-sepia text-sm leading-relaxed mb-4">
        {source.description}
      </p>

      
      {source.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {source.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded bg-museum-navy/10 text-museum-navy text-xs"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag.replace('-', ' ')}
            </span>
          ))}
          {source.tags.length > 3 && (
            <span className="text-xs text-museum-sepia">
              +{source.tags.length - 3} more
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}
