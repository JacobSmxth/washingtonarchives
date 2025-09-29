export interface Source {
  id: string;
  title: string;
  url: string;
  description: string;
  source: string;
  type: "Primary Source" | "Secondary Source" | "Museum Resource" | "Reference Work" | "Academic Paper" | "Academic Research" | "Official Government Source" | "Historical Analysis" | "Educational Resource" | "Military History";
  tags: string[];
  period?: string;
  reliability: "High" | "Medium" | "Low";
  dateAdded?: string;
  relatedSections: string[];
}

export const sourcesDatabase: Source[] = [
  // Primary Sources
  {
    id: "founders-inaugural-address",
    title: "First Inaugural Address",
    url: "https://avalon.law.yale.edu/18th_century/washing.asp",
    description: "Washington's first inaugural address, establishing precedents for the presidency and emphasizing virtue in government.",
    source: "Avalon Project, Yale Law School",
    type: "Primary Source",
    tags: ["presidency", "inaugural", "government", "virtue", "precedents"],
    period: "1789",
    reliability: "High",
    relatedSections: ["presidency"]
  },
  {
    id: "founders-farewell-address",
    title: "Farewell Address",
    url: "https://avalon.law.yale.edu/18th_century/wash1.asp",
    description: "Washington's farewell address warning against political parties and foreign entanglements.",
    source: "Avalon Project, Yale Law School",
    type: "Primary Source",
    tags: ["farewell", "political-parties", "foreign-policy", "warnings"],
    period: "1796",
    reliability: "High",
    relatedSections: ["farewell-address"]
  },
  {
    id: "founders-youth-journal",
    title: "Early Life & Education Documents",
    url: "https://founders.archives.gov/documents/Washington/01-01-02-0001-0002",
    description: "Early documents regarding Washington's youth, education, and family background.",
    source: "Founders Online, National Archives",
    type: "Primary Source",
    tags: ["youth", "education", "family", "early-life"],
    period: "1732-1750",
    reliability: "High",
    relatedSections: ["youth"]
  },
  {
    id: "founders-constitutional-convention",
    title: "Constitutional Convention Correspondence",
    url: "https://founders.archives.gov/documents/Washington/03-07-02-0358",
    description: "Washington's correspondence during the Constitutional Convention period.",
    source: "Founders Online, National Archives",
    type: "Primary Source",
    tags: ["constitutional-convention", "correspondence", "government", "federalism"],
    period: "1787",
    reliability: "High",
    relatedSections: ["constitutional-convention"]
  },
  {
    id: "founders-military-correspondence",
    title: "Military Correspondence",
    url: "https://founders.archives.gov/documents/Washington/03-07-02-0305",
    description: "Military correspondence and orders during Washington's military career.",
    source: "Founders Online, National Archives",
    type: "Primary Source",
    tags: ["military", "correspondence", "revolutionary-war", "leadership"],
    period: "1775-1783",
    reliability: "High",
    relatedSections: ["revolutionary-war", "military-early"]
  },
  {
    id: "mount-vernon-quotes",
    title: "Washington Quotes Collection",
    url: "https://www.mountvernon.org/library/digitalhistory/past-projects/quotes",
    description: "Authenticated collection of George Washington quotes from various periods.",
    source: "Mount Vernon Digital History",
    type: "Primary Source",
    tags: ["quotes", "sayings", "philosophy", "leadership"],
    period: "1732-1799",
    reliability: "High",
    relatedSections: ["all"]
  },
  {
    id: "founders-death-rumors",
    title: "Rumors of His Death (1755)",
    url: "https://founders.archives.gov/documents/Washington/02-01-02-0169",
    description: "Washington's humorous letter about rumors of his death after the Battle of Monongahela.",
    source: "Founders Online, National Archives",
    type: "Primary Source",
    tags: ["humor", "battle-of-monongahela", "death", "letters"],
    period: "1755",
    reliability: "High",
    relatedSections: ["washington-humor", "military-early"]
  },
  {
    id: "founders-nephew-advice",
    title: "Advice to His Nephew (1783)",
    url: "https://founders.archives.gov/documents/Washington/99-01-02-10429",
    description: "Letter to Bushrod Washington with advice about vanity, gambling, and character.",
    source: "Founders Online, National Archives",
    type: "Primary Source",
    tags: ["humor", "advice", "character", "family", "gambling"],
    period: "1783",
    reliability: "High",
    relatedSections: ["washington-humor"]
  },
  {
    id: "miller-center-death",
    title: "Death of George Washington (1799)",
    url: "https://millercenter.org/the-presidency/presidential-speeches/december-19-1799-death-george-washington",
    description: "Primary source documentation of Washington's death in December 1799.",
    source: "Miller Center, University of Virginia",
    type: "Primary Source",
    tags: ["death", "mount-vernon", "final-days"],
    period: "1799",
    reliability: "High",
    relatedSections: ["mount-vernon", "legacy"]
  },

  // Secondary Sources - Academic
  {
    id: "ndu-press-strategy",
    title: "Washington as National Security Strategist",
    url: "https://ndupress.ndu.edu/Portals/68/Documents/jfq/jfq-109/jfq-109_33-40_Arnold.pdf?ver=apK3ap1248pELVj_kF1n_Q%3D%3D",
    description: "Academic analysis of Washington's strategic thinking and national security approach.",
    source: "National Defense University Press",
    type: "Academic Paper",
    tags: ["strategy", "national-security", "military", "leadership"],
    period: "Analysis",
    reliability: "High",
    relatedSections: ["revolutionary-war", "battle-record"]
  },
  {
    id: "johns-hopkins-slavery",
    title: "George Washington and Slavery",
    url: "https://hub.jhu.edu/2016/02/19/george-washington-slavery-mount-vernon/",
    description: "Academic examination of Washington's complex relationship with slavery.",
    source: "Johns Hopkins University",
    type: "Academic Research",
    tags: ["slavery", "mount-vernon", "contradiction", "morality"],
    period: "Analysis",
    reliability: "High",
    relatedSections: ["slavery", "mount-vernon"]
  },

  // Museum Resources
  {
    id: "mount-vernon-biography",
    title: "George Washington Biography",
    url: "http://mountvernon.org/george-washington/biography",
    description: "Comprehensive biographical overview of Washington's life and achievements.",
    source: "Mount Vernon",
    type: "Museum Resource",
    tags: ["biography", "life", "achievements", "overview"],
    period: "1732-1799",
    reliability: "High",
    relatedSections: ["all"]
  },
  {
    id: "mount-vernon-battles",
    title: "Washington's Revolutionary War Battles",
    url: "https://www.mountvernon.org/george-washington/the-revolutionary-war/washingtons-revolutionary-war-battles/",
    description: "Comprehensive coverage of Washington's military campaigns and battle records.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource",
    tags: ["battles", "revolutionary-war", "military", "campaigns"],
    period: "1775-1783",
    reliability: "High",
    relatedSections: ["revolutionary-war", "battle-record"]
  },
  {
    id: "mount-vernon-fort-necessity",
    title: "Fort Necessity",
    url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/fort-necessity",
    description: "Washington's constructed fort at Great Meadows, attacked and forced to surrender — his only military surrender.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource",
    tags: ["fort-necessity", "surrender", "french-indian-war", "defeat"],
    period: "1754",
    reliability: "High",
    relatedSections: ["military-early", "battle-record"]
  },
  {
    id: "mount-vernon-shays-rebellion",
    title: "Shays' Rebellion",
    url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/shays-rebellion",
    description: "Coverage of Shays' Rebellion and its impact on Washington's views on federal government.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource",
    tags: ["shays-rebellion", "federalism", "government", "constitution"],
    period: "1786-1787",
    reliability: "High",
    relatedSections: ["constitutional-convention"]
  },
  {
    id: "mount-vernon-16-sided-barn",
    title: "The 16-Sided Barn",
    url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/16-sided-barn",
    description: "Detailed information about Washington's innovative 16-sided barn design and agricultural innovations.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource",
    tags: ["agriculture", "innovation", "mount-vernon", "farming"],
    period: "1790s",
    reliability: "High",
    relatedSections: ["mount-vernon"]
  },

  // Reference Works
  {
    id: "britannica-biography",
    title: "George Washington Biography",
    url: "https://www.britannica.com/biography/George-Washington",
    description: "Scholarly encyclopedic article covering all aspects of Washington's life and legacy.",
    source: "Encyclopedia Britannica",
    type: "Reference Work",
    tags: ["biography", "comprehensive", "life", "legacy"],
    period: "1732-1799",
    reliability: "High",
    relatedSections: ["all"]
  },
  {
    id: "britannica-fort-necessity",
    title: "Battle of Fort Necessity",
    url: "https://www.britannica.com/topic/Battle-of-Fort-Necessity",
    description: "Detailed account of Washington's only military surrender and its significance in his early career.",
    source: "Encyclopedia Britannica",
    type: "Reference Work",
    tags: ["fort-necessity", "surrender", "french-indian-war", "early-military"],
    period: "1754",
    reliability: "High",
    relatedSections: ["military-early", "battle-record"]
  },
  {
    id: "britannica-jumonville-glen",
    title: "Battle of Jumonville Glen",
    url: "https://www.britannica.com/event/Battle-of-Jumonville-Glen",
    description: "A skirmish in which Washington's men ambushed a French scouting party — often considered the opening military action of the French & Indian War.",
    source: "Encyclopedia Britannica",
    type: "Reference Work",
    tags: ["jumonville-glen", "french-indian-war", "ambush", "first-battle"],
    period: "1754",
    reliability: "High",
    relatedSections: ["military-early", "battle-record"]
  },
  {
    id: "wikipedia-monongahela",
    title: "Battle of the Monongahela",
    url: "https://en.wikipedia.org/wiki/Battle_of_the_Monongahela",
    description: "Part of Braddock's expedition; Washington served under General Braddock and played a role in managing the retreat after defeat.",
    source: "Wikipedia",
    type: "Reference Work",
    tags: ["monongahela", "braddock", "retreat", "french-indian-war"],
    period: "1755",
    reliability: "Medium",
    relatedSections: ["military-early", "battle-record"]
  },
  {
    id: "wikipedia-french-indian-war",
    title: "George Washington in the French and Indian War",
    url: "https://en.wikipedia.org/wiki/George_Washington_in_the_French_and_Indian_War",
    description: "Washington served in the Virginia militia, took part in frontier defense and in the Forbes Expedition that eventually led to capture of French positions.",
    source: "Wikipedia",
    type: "Reference Work",
    tags: ["french-indian-war", "militia", "frontier", "forbes-expedition"],
    period: "1754-1758",
    reliability: "Medium",
    relatedSections: ["military-early", "battle-record"]
  },
  {
    id: "wikipedia-washington-quarter",
    title: "Washington Quarter Design Details",
    url: "https://en.wikipedia.org/wiki/Washington_quarter",
    description: "Detailed information about the quarter's design evolution and specifications.",
    source: "Wikipedia",
    type: "Reference Work",
    tags: ["quarter", "currency", "design", "evolution"],
    period: "1932-present",
    reliability: "Medium",
    relatedSections: ["washington-quarter"]
  },

  // Historical Analysis
  {
    id: "smithsonian-reluctant-president",
    title: "George Washington - The Reluctant President",
    url: "https://www.smithsonianmag.com/history/george-washington-the-reluctant-president-49492",
    description: "Analysis of Washington's hesitation about accepting presidential power, featured in Fun Facts humor section.",
    source: "Smithsonian Magazine",
    type: "Historical Analysis",
    tags: ["presidency", "reluctance", "humor", "power"],
    period: "1789",
    reliability: "High",
    relatedSections: ["presidency", "washington-humor"]
  },
  {
    id: "national-interest-charles-lee",
    title: "Charles Lee: The General Who Almost Replaced George Washington",
    url: "https://nationalinterest.org/blog/reboot/charles-lee-general-who-almost-replaced-george-washington-173343",
    description: "Analysis of European vs. American military tactics during the Revolutionary War period.",
    source: "The National Interest",
    type: "Historical Analysis",
    tags: ["charles-lee", "tactics", "european", "american", "military"],
    period: "1775-1783",
    reliability: "Medium",
    relatedSections: ["military-early", "revolutionary-war"]
  },
  {
    id: "parrish-washington-character",
    title: "Washington's Character and Leadership",
    url: "https://www.donparrish.com/EssayWashington.html",
    description: "Essay including Thomas Jefferson's assessment of Washington's inflexible justice and character.",
    source: "Historical Essay Collection",
    type: "Historical Analysis",
    tags: ["character", "leadership", "jefferson", "justice"],
    period: "Analysis",
    reliability: "Medium",
    relatedSections: ["presidency", "legacy"]
  },

  // Educational Resources
  {
    id: "history-com-washington",
    title: "George Washington Biography",
    url: "https://www.history.com/articles/george-washington",
    description: "Educational overview of Washington's life and historical significance.",
    source: "History.com",
    type: "Educational Resource",
    tags: ["biography", "education", "overview", "significance"],
    period: "1732-1799",
    reliability: "Medium",
    relatedSections: ["all"]
  },

  // Military History
  {
    id: "battlefields-trust",
    title: "Military Career and Battlefields",
    url: "https://www.battlefields.org/learn/biographies/george-washington",
    description: "Focus on Washington's military career and the battlefields where he served.",
    source: "American Battlefield Trust",
    type: "Military History",
    tags: ["military", "battlefields", "career", "service"],
    period: "1754-1783",
    reliability: "High",
    relatedSections: ["military-early", "revolutionary-war", "battle-record"]
  },

  // Official Government Sources
  {
    id: "us-mint-quarter",
    title: "Washington Quarter History",
    url: "https://www.usmint.gov/learn/coins-and-medals/circulating-coins/quarter",
    description: "Official U.S. Mint information about the Washington quarter design and history.",
    source: "U.S. Mint",
    type: "Official Government Source",
    tags: ["quarter", "currency", "official", "mint"],
    period: "1932-present",
    reliability: "High",
    relatedSections: ["washington-quarter"]
  }
];

// Helper functions for filtering and searching
export const getSourcesBySection = (sectionId: string): Source[] => {
  return sourcesDatabase.filter(source => 
    source.relatedSections.includes(sectionId) || source.relatedSections.includes("all")
  );
};

export const getSourcesByType = (type: Source['type']): Source[] => {
  return sourcesDatabase.filter(source => source.type === type);
};

export const getSourcesByTag = (tag: string): Source[] => {
  return sourcesDatabase.filter(source => source.tags.includes(tag));
};

export const getSourcesByReliability = (reliability: Source['reliability']): Source[] => {
  return sourcesDatabase.filter(source => source.reliability === reliability);
};

export const searchSources = (query: string): Source[] => {
  const lowercaseQuery = query.toLowerCase();
  return sourcesDatabase.filter(source => 
    source.title.toLowerCase().includes(lowercaseQuery) ||
    source.description.toLowerCase().includes(lowercaseQuery) ||
    source.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getUniqueTypes = (): Source['type'][] => {
  return [...new Set(sourcesDatabase.map(source => source.type))];
};

export const getUniqueTags = (): string[] => {
  return [...new Set(sourcesDatabase.flatMap(source => source.tags))].sort();
};

export const getSourcesByPeriod = (period: string): Source[] => {
  return sourcesDatabase.filter(source => source.period?.includes(period));
};
