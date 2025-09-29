'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, BookOpen, FileText, University, Archive, Filter, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sourcesDatabase, getUniqueTypes, getUniqueTags, getSourcesByType, getSourcesByTag, searchSources, type Source } from '@/data/sources';

interface SourcesPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const primarySources = [
  {
    title: "Washington's Farewell Address (1796)",
    url: "https://avalon.law.yale.edu/18th_century/washing.asp",
    description: "The complete text of Washington's influential farewell address, establishing key principles for American foreign policy and warning against political parties.",
    source: "Yale Law School Avalon Project"
  },
  {
    title: "Washington's First Inaugural Address",
    url: "https://avalon.law.yale.edu/18th_century/wash1.asp",
    description: "Washington's speech upon taking the oath as the first President of the United States.",
    source: "Yale Law School Avalon Project"
  },
  {
    title: "Early Correspondence and Documents",
    url: "https://founders.archives.gov/documents/Washington/01-01-02-0001-0002",
    description: "Original letters and documents from Washington's early life and career.",
    source: "National Archives - Founders Online"
  },
  {
    title: "Presidential Correspondence",
    url: "https://founders.archives.gov/documents/Washington/03-07-02-0358",
    description: "Letters and official correspondence during Washington's presidency.",
    source: "National Archives - Founders Online"
  },
  {
    title: "Military and Political Letters",
    url: "https://founders.archives.gov/documents/Washington/03-07-02-0305",
    description: "Washington's correspondence regarding military strategy and political matters.",
    source: "National Archives - Founders Online"
  },
  {
    title: "Washington's Quotations",
    url: "https://www.mountvernon.org/library/digitalhistory/past-projects/quotes",
    description: "Verified quotations from George Washington with historical context.",
    source: "Mount Vernon Digital History"
  },
  {
    title: "Liberty Fund Quote Collection",
    url: "https://oll.libertyfund.org/people/george-washington/quotes",
    description: "Comprehensive collection of Washington's most significant quotes and speeches.",
    source: "Online Library of Liberty"
  },
  {
    title: "Death of George Washington (1799)",
    url: "https://millercenter.org/the-presidency/presidential-speeches/december-19-1799-death-george-washington",
    description: "Primary source account of Washington's final days and death in December 1799.",
    source: "Miller Center, University of Virginia"
  }
];

const secondarySources = [
  {
    title: "Washington's Military Leadership Analysis",
    url: "https://ndupress.ndu.edu/Portals/68/Documents/jfq/jfq-109/jfq-109_33-40_Arnold.pdf",
    description: "Academic analysis of Washington's military strategy and leadership during the Revolutionary War.",
    source: "National Defense University Press",
    type: "Academic Paper"
  },
  {
    title: "George Washington and Slavery",
    url: "https://hub.jhu.edu/2016/02/19/george-washington-slavery-mount-vernon/",
    description: "Scholarly examination of Washington's complex relationship with slavery at Mount Vernon.",
    source: "Johns Hopkins University",
    type: "Academic Research"
  },
  {
    title: "Complete Biography",
    url: "http://mountvernon.org/george-washington/biography",
    description: "Comprehensive biographical information maintained by Washington's estate.",
    source: "Mount Vernon Ladies' Association",
    type: "Museum Resource"
  },
  {
    title: "The Many Faces of George Washington",
    url: "https://www.smithsonianmag.com/history/the-many-faces-of-george-washington-112189/",
    description: "Analysis of how Washington's image and legacy have evolved over time.",
    source: "Smithsonian Magazine",
    type: "Historical Analysis"
  },
  {
    title: "George Washington Biography",
    url: "https://www.history.com/articles/george-washington",
    description: "Comprehensive overview of Washington's life, achievements, and historical significance.",
    source: "History.com",
    type: "Educational Resource"
  },
  {
    title: "Military Career and Battlefields",
    url: "https://www.battlefields.org/learn/biographies/george-washington",
    description: "Focus on Washington's military career and the battlefields where he served.",
    source: "American Battlefield Trust",
    type: "Military History"
  },
  {
    title: "Encyclopedic Entry",
    url: "https://www.britannica.com/biography/George-Washington",
    description: "Scholarly encyclopedic article covering all aspects of Washington's life and legacy.",
    source: "Encyclopedia Britannica",
    type: "Reference Work"
  },
  {
    title: "Battle of Fort Necessity",
    url: "https://www.britannica.com/topic/Battle-of-Fort-Necessity",
    description: "Detailed account of Washington's only military surrender and its significance in his early career.",
    source: "Encyclopedia Britannica",
    type: "Reference Work"
  },
  {
    title: "Charles Lee: The General Who Almost Replaced George Washington",
    url: "https://nationalinterest.org/blog/reboot/charles-lee-general-who-almost-replaced-george-washington-173343",
    description: "Analysis of European vs. American military tactics during the Revolutionary War period.",
    source: "The National Interest",
    type: "Historical Analysis"
  },
  {
    title: "Shays' Rebellion",
    url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/shays-rebellion",
    description: "Mount Vernon's account of Shays' Rebellion and its impact on Washington's views of federal government.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource"
  },
  {
    title: "Washington's Character and Leadership",
    url: "https://www.donparrish.com/EssayWashington.html",
    description: "Essay including Thomas Jefferson's assessment of Washington's inflexible justice and character.",
    source: "Historical Essay Collection",
    type: "Historical Analysis"
  },
  {
    title: "The 16-Sided Barn",
    url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/16-sided-barn",
    description: "Detailed information about Washington's innovative 16-sided barn design and agricultural innovations.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource"
  },
  {
    title: "Washington's Revolutionary War Battles",
    url: "https://www.mountvernon.org/george-washington/the-revolutionary-war/washingtons-revolutionary-war-battles/",
    description: "Comprehensive coverage of Washington's military campaigns and battle records used in Fun Facts section.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource"
  },
  {
    title: "George Washington - The Reluctant President",
    url: "https://www.smithsonianmag.com/history/george-washington-the-reluctant-president-49492",
    description: "Analysis of Washington's hesitation about accepting presidential power, featured in Fun Facts humor section.",
    source: "Smithsonian Magazine",
    type: "Historical Analysis"
  },
  {
    title: "Washington Quarter History",
    url: "https://www.usmint.gov/learn/coins-and-medals/circulating-coins/quarter",
    description: "Official U.S. Mint information about the Washington quarter design and history.",
    source: "U.S. Mint",
    type: "Official Government Source"
  },
  {
    title: "Washington Quarter Design Details",
    url: "https://en.wikipedia.org/wiki/Washington_quarter",
    description: "Detailed information about the quarter's design evolution and specifications.",
    source: "Wikipedia",
    type: "Reference Work"
  },
  {
    title: "Battle of Jumonville Glen",
    url: "https://www.britannica.com/event/Battle-of-Jumonville-Glen",
    description: "A skirmish in which Washington's men ambushed a French scouting party — often considered the opening military action of the French & Indian War.",
    source: "Encyclopedia Britannica",
    type: "Reference Work"
  },
  {
    title: "Fort Necessity",
    url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/fort-necessity",
    description: "Washington's constructed fort at Great Meadows, attacked and forced to surrender — his only military surrender.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource"
  },
  {
    title: "Battle of the Monongahela",
    url: "https://en.wikipedia.org/wiki/Battle_of_the_Monongahela",
    description: "Part of Braddock's expedition; Washington served under General Braddock and played a role in managing the retreat after defeat.",
    source: "Wikipedia",
    type: "Reference Work"
  },
  {
    title: "George Washington in the French and Indian War",
    url: "https://en.wikipedia.org/wiki/George_Washington_in_the_French_and_Indian_War",
    description: "Washington served in the Virginia militia, took part in frontier defense and in the Forbes Expedition that eventually led to capture of French positions.",
    source: "Wikipedia",
    type: "Reference Work"
  }
];

const sourceTypeColors = {
  "Academic Paper": "bg-blue-100 text-blue-800",
  "Academic Research": "bg-purple-100 text-purple-800",
  "Museum Resource": "bg-green-100 text-green-800",
  "Historical Analysis": "bg-orange-100 text-orange-800",
  "Educational Resource": "bg-yellow-100 text-yellow-800",
  "Military History": "bg-red-100 text-red-800",
  "Reference Work": "bg-gray-100 text-gray-800",
  "Official Government Source": "bg-blue-100 text-blue-800"
};

export default function SourcesPage({ isOpen, onClose }: SourcesPageProps) {
  const pageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-museum-ink/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      {/* Page Content */}
      <motion.div
        className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-8 py-6 bg-gradient-to-r from-museum-navy to-museum-navy-light text-white">
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
          
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-full">
              <Archive className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold">Sources & References</h1>
              <p className="text-lg opacity-90 mt-1">Primary documents and scholarly resources</p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-8 space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-lg text-museum-sepia font-body max-w-4xl mx-auto leading-relaxed">
                This digital museum draws from a comprehensive collection of primary documents, scholarly research, 
                and authoritative sources to present an accurate and nuanced portrait of George Washington's life and legacy.
              </p>
            </motion.div>

            {/* Primary Sources */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <FileText className="w-6 h-6 text-museum-navy" />
                <h2 className="text-2xl font-display font-bold text-museum-ink">Primary Sources</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-museum-navy/30 to-transparent"></div>
              </div>
              
              <p className="text-museum-sepia font-body mb-6 leading-relaxed">
                Original documents, letters, and speeches written by George Washington himself, providing direct insight into his thoughts, decisions, and character.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {primarySources.map((source, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="group"
                  >
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 bg-museum-parchment rounded-xl border border-museum-navy/10 hover:border-museum-navy/30 transition-all hover:shadow-museum group-hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display text-lg font-semibold text-museum-ink group-hover:text-museum-navy transition-colors">
                          {source.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-museum-navy opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2 mt-1" />
                      </div>
                      
                      <p className="text-museum-sepia text-sm mb-3 leading-relaxed">
                        {source.description}
                      </p>
                      
                      <div className="flex items-center space-x-2">
                        <University className="w-4 h-4 text-museum-gold" />
                        <span className="text-xs font-medium text-museum-navy">
                          {source.source}
                        </span>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Secondary Sources */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <BookOpen className="w-6 h-6 text-museum-navy" />
                <h2 className="text-2xl font-display font-bold text-museum-ink">Secondary Sources</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-museum-navy/30 to-transparent"></div>
              </div>
              
              <p className="text-museum-sepia font-body mb-6 leading-relaxed">
                Scholarly research, historical analysis, and educational resources that provide context, interpretation, and modern perspectives on Washington's life and times.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {secondarySources.map((source, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="group"
                  >
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 bg-white rounded-xl border border-museum-navy/10 hover:border-museum-navy/30 transition-all hover:shadow-museum group-hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-semibold text-museum-ink group-hover:text-museum-navy transition-colors mb-2">
                            {source.title}
                          </h3>
                          {source.type && (
                            <span className={cn(
                              "inline-block px-2 py-1 rounded-full text-xs font-medium",
                              sourceTypeColors[source.type as keyof typeof sourceTypeColors] || "bg-gray-100 text-gray-800"
                            )}>
                              {source.type}
                            </span>
                          )}
                        </div>
                        <ExternalLink className="w-4 h-4 text-museum-navy opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2 mt-1" />
                      </div>
                      
                      <p className="text-museum-sepia text-sm mb-3 leading-relaxed">
                        {source.description}
                      </p>
                      
                      <div className="flex items-center space-x-2">
                        <University className="w-4 h-4 text-museum-gold" />
                        <span className="text-xs font-medium text-museum-navy">
                          {source.source}
                        </span>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Research Methodology Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-museum-navy/5 to-museum-gold/5 p-6 rounded-xl border border-museum-navy/20"
            >
              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-museum-navy mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-museum-ink mb-2">
                    Research Methodology
                  </h3>
                  <p className="text-museum-sepia text-sm leading-relaxed mb-3">
                    Extensive research was conducted using the <a 
                      href="https://founders.archives.gov/?q=%20Author%3A%22Washington%2C%20George%22" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-museum-navy hover:text-museum-navy-light font-medium underline"
                    >
                      Founders Online database
                    </a>, which contains over 31,000 searchable documents authored by George Washington. 
                    This National Archives resource required extensive scrolling and document review to locate 
                    appropriate quotations and verify historical context.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Source Reliability Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200"
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
                    While this archive strives for historical accuracy, some sources may vary in reliability. 
                    Wikipedia entries and general websites should be cross-referenced with academic sources. 
                    Primary sources from the National Archives and established institutions like Mount Vernon 
                    are generally most reliable. Always verify information for academic work.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Citation Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-gradient-to-r from-museum-cream to-museum-cream-dark p-6 rounded-xl border border-museum-gold/20"
            >
              <div className="flex items-start space-x-3">
                <Archive className="w-5 h-5 text-museum-navy mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-museum-ink mb-2">
                    Academic Standards
                  </h3>
                  <p className="text-museum-sepia text-sm leading-relaxed">
                    WashingtonArchive.org follows academic standards for historical research and presentation. 
                    All quotations and facts are sourced from the primary and secondary materials listed above. 
                    When citing this resource, please reference both this archive and the original source materials.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-museum-parchment border-t border-museum-navy/10">
          <div className="flex justify-between items-center">
            <p className="text-sm text-museum-sepia font-body">
              George Washington Digital Museum • Academic Research Collection
            </p>
            <motion.button
              onClick={onClose}
              className="px-6 py-2 bg-museum-navy text-white rounded-lg hover:bg-museum-navy-light transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
