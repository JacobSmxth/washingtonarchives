export interface Source {
  id: string;
  title: string;
  url: string;
  description: string;
  source: string;
  type: "Primary Source" | "Secondary Source" | "Museum Resource" | "Historical Analysis" | "Educational Resource" | "Reference Work" | "Official Government Source";
  tags: string[];
  period?: string;
  reliability: "High" | "Medium" | "Low";
  dateAdded?: string;
  relatedSections: string[];
}

export const sourcesDatabase: Source[] = [
  {
    id: "founders-inaugural-address",
    title: "Avalon Project - First Inaugural Address",
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
    title: "Avalon Project - Farewell Address",
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
    title: "Founders Online - Early Life & Education Documents",
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
    title: "Founders Online - Constitutional Convention Correspondence",
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
    title: "Founders Online - Military Correspondence",
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
    title: "Mount Vernon - Authenticated Quotes Collection",
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
    title: "Founders Online - Death Rumors Letter (1755)",
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
    title: "Founders Online - Advice to Nephew (1783)",
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
    title: "Miller Center - Death of Washington (1799)",
    url: "https://millercenter.org/the-presidency/presidential-speeches/december-19-1799-death-george-washington",
    description: "Primary source documentation of Washington's death in December 1799.",
    source: "Miller Center, University of Virginia",
    type: "Primary Source",
    tags: ["death", "mount-vernon", "final-days"],
    period: "1799",
    reliability: "High",
    relatedSections: ["mount-vernon", "legacy"]
  },

  {
    id: "ndu-press-strategy",
    title: "NDU Press - Washington as Security Strategist",
    url: "https://ndupress.ndu.edu/Portals/68/Documents/jfq/jfq-109/jfq-109_33-40_Arnold.pdf?ver=apK3ap1248pELVj_kF1n_Q%3D%3D",
    description: "Academic analysis of Washington's strategic thinking and national security approach.",
    source: "National Defense University Press",
    type: "Historical Analysis",
    tags: ["strategy", "national-security", "military", "leadership"],
    period: "Analysis",
    reliability: "High",
    relatedSections: ["revolutionary-war", "battle-record"]
  },
  {
    id: "johns-hopkins-slavery",
    title: "Johns Hopkins - Washington & Slavery Analysis",
    url: "https://hub.jhu.edu/2016/02/19/george-washington-slavery-mount-vernon/",
    description: "Academic examination of Washington's complex relationship with slavery.",
    source: "Johns Hopkins University",
    type: "Historical Analysis",
    tags: ["slavery", "mount-vernon", "contradiction", "morality"],
    period: "Analysis",
    reliability: "High",
    relatedSections: ["slavery", "mount-vernon"]
  },

  {
    id: "mount-vernon-biography",
    title: "Mount Vernon - Complete Biography Overview",
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
    title: "Mount Vernon - Revolutionary War Battles Catalog",
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
    title: "Mount Vernon - Fort Necessity & Surrender",
    url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/fort-necessity",
    description: "Washington's constructed fort at Great Meadows, attacked and forced to surrender, his only military surrender.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource",
    tags: ["fort-necessity", "surrender", "french-indian-war", "defeat"],
    period: "1754",
    reliability: "High",
    relatedSections: ["military-early", "battle-record"]
  },
  {
    id: "mount-vernon-shays-rebellion",
    title: "Mount Vernon - Shays' Rebellion Impact",
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
    title: "Mount Vernon - 16-Sided Barn Innovation",
    url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/16-sided-barn",
    description: "Detailed information about Washington's innovative 16-sided barn design and agricultural innovations.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource",
    tags: ["agriculture", "innovation", "mount-vernon", "farming"],
    period: "1790s",
    reliability: "High",
    relatedSections: ["mount-vernon"]
  },

  {
    id: "britannica-biography",
    title: "Britannica - Complete Encyclopedia Entry",
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
    title: "Britannica - Fort Necessity Battle Details",
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
    title: "Britannica - Jumonville Glen Ambush",
    url: "https://www.britannica.com/event/Battle-of-Jumonville-Glen",
    description: "A skirmish in which Washington's men ambushed a French scouting party, often considered the opening military action of the French & Indian War.",
    source: "Encyclopedia Britannica",
    type: "Reference Work",
    tags: ["jumonville-glen", "french-indian-war", "ambush", "first-battle"],
    period: "1754",
    reliability: "High",
    relatedSections: ["military-early", "battle-record"]
  },
  {
    id: "wikipedia-monongahela",
    title: "Wikipedia - Monongahela & Braddock's Defeat",
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
    title: "Wikipedia - French & Indian War Service",
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
    title: "Wikipedia - Quarter Design & History",
    url: "https://en.wikipedia.org/wiki/Washington_quarter",
    description: "Detailed information about the quarter's design evolution and specifications.",
    source: "Wikipedia",
    type: "Reference Work",
    tags: ["quarter", "currency", "design", "evolution"],
    period: "1932-present",
    reliability: "Medium",
    relatedSections: ["washington-quarter"]
  },

  {
    id: "smithsonian-reluctant-president",
    title: "Smithsonian - The Reluctant President",
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
    title: "National Interest - Charles Lee vs Washington",
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
    title: "Parrish - Character & Jefferson's Assessment",
    url: "https://www.donparrish.com/EssayWashington.html",
    description: "Essay including Thomas Jefferson's assessment of Washington's inflexible justice and character.",
    source: "Historical Essay Collection",
    type: "Historical Analysis",
    tags: ["character", "leadership", "jefferson", "justice"],
    period: "Analysis",
    reliability: "Medium",
    relatedSections: ["presidency", "legacy"]
  },

  {
    id: "history-com-washington",
    title: "History.com - Complete Life Overview",
    url: "https://www.history.com/articles/george-washington",
    description: "Educational overview of Washington's life and historical significance.",
    source: "History.com",
    type: "Educational Resource",
    tags: ["biography", "education", "overview", "significance"],
    period: "1732-1799",
    reliability: "Medium",
    relatedSections: ["all"]
  },

  {
    id: "battlefields-trust",
    title: "Battlefield Trust - Military Career & Sites",
    url: "https://www.battlefields.org/learn/biographies/george-washington",
    description: "Focus on Washington's military career and the battlefields where he served.",
    source: "American Battlefield Trust",
    type: "Historical Analysis",
    tags: ["military", "battlefields", "career", "service"],
    period: "1754-1783",
    reliability: "High",
    relatedSections: ["military-early", "revolutionary-war", "battle-record"]
  },

  {
    id: "us-mint-quarter",
    title: "U.S. Mint - Official Quarter Information",
    url: "https://www.usmint.gov/learn/coins-and-medals/circulating-coins/quarter",
    description: "Official U.S. Mint information about the Washington quarter design and history.",
    source: "U.S. Mint",
    type: "Official Government Source",
    tags: ["quarter", "currency", "official", "mint"],
    period: "1932-present",
    reliability: "High",
    relatedSections: ["washington-quarter"]
  },

  {
    id: "boston-tea-party-facts",
    title: "Boston Tea Party Museum - Washington Facts & Precedents",
    url: "https://www.bostonteapartyship.com/george-washington-facts",
    description: "Comprehensive collection of Washington facts including teeth, unanimous election, military rank, personal details, presidential oath additions, and the establishment of the title 'Mr. President.'",
    source: "Boston Tea Party Ship & Museum",
    type: "Educational Resource",
    tags: ["teeth", "unanimous-election", "military-rank", "personal-facts", "fun-facts", "presidential-precedents", "oath", "title", "inauguration"],
    period: "1732-1799",
    reliability: "Medium",
    relatedSections: ["fun-facts", "presidency"]
  },
  {
    id: "wallbuilders-facts",
    title: "WallBuilders - Cherry Tree Myth & Height Facts",
    url: "https://wallbuilders.com/ten-facts-about-george-washington",
    description: "Historical facts about Washington including cherry tree myth debunking and height details.",
    source: "WallBuilders",
    type: "Historical Analysis",
    tags: ["cherry-tree-myth", "height", "myths", "debunking"],
    period: "Analysis",
    reliability: "Medium",
    relatedSections: ["fun-facts"]
  },
  {
    id: "lawline-fun-facts",
    title: "Lawline Blog - White House & Birthday Facts",
    url: "https://blog.lawline.com/george-washington-top-ten-fun-facts",
    description: "Collection of interesting Washington facts including White House, birthday, and personal quirks.",
    source: "Lawline Blog",
    type: "Educational Resource",
    tags: ["white-house", "birthday", "personal", "fun-facts"],
    period: "1732-1799",
    reliability: "Medium",
    relatedSections: ["fun-facts"]
  },
  {
    id: "history-little-known-facts",
    title: "History.com - Little Known Facts & Education",
    url: "https://www.history.com/news/george-washington-little-known-facts",
    description: "Historical facts about Washington's education and lesser-known aspects of his life.",
    source: "History.com",
    type: "Educational Resource",
    tags: ["education", "little-known", "facts"],
    period: "1732-1799",
    reliability: "High",
    relatedSections: ["fun-facts", "youth"]
  },
  {
    id: "history-presidential-veto",
    title: "History.com - First Presidential Veto (1792)",
    url: "https://www.history.com/this-day-in-history/April-5/washington-exercises-first-presidential-veto",
    description: "Historical account of Washington's first presidential veto in 1792.",
    source: "History.com",
    type: "Historical Analysis",
    tags: ["presidential-veto", "precedents", "government"],
    period: "1792",
    reliability: "High",
    relatedSections: ["fun-facts", "presidency"]
  },
  {
    id: "mount-vernon-middle-name",
    title: "Mount Vernon - Why No Middle Name",
    url: "https://www.mountvernon.org/george-washington/middle-name",
    description: "Explanation of Washington's lack of a middle name and naming conventions of the era.",
    source: "Mount Vernon",
    type: "Museum Resource",
    tags: ["middle-name", "naming", "personal"],
    period: "1732",
    reliability: "High",
    relatedSections: ["fun-facts", "youth"]
  },
  {
    id: "historynet-delaware-crossing",
    title: "HistoryNet - Delaware Crossing Painting Myths",
    url: "https://www.historynet.com/whats-wrong-washington-crossing-delaware/",
    description: "Analysis of the famous painting's inaccuracies and the reality of the Delaware crossing.",
    source: "HistoryNet",
    type: "Historical Analysis",
    tags: ["delaware-crossing", "painting", "myths", "revolutionary-war"],
    period: "1776",
    reliability: "High",
    relatedSections: ["fun-facts", "revolutionary-war"]
  },
  {
    id: "mount-vernon-spymaster",
    title: "Mount Vernon - Washington as Spymaster",
    url: "https://www.mountvernon.org/george-washington/the-revolutionary-war/spying-and-espionage/george-washington-spymaster",
    description: "Detailed account of Washington's intelligence network and espionage activities during the Revolution.",
    source: "Mount Vernon",
    type: "Museum Resource",
    tags: ["spying", "espionage", "intelligence", "agent-711"],
    period: "1775-1783",
    reliability: "High",
    relatedSections: ["fun-facts", "revolutionary-war"]
  },
  {
    id: "allegany-museum-whiskey-rebellion",
    title: "Allegany Museum - Whiskey Rebellion Leadership",
    url: "https://allegany-museum.org/washingtons-last-visit-to-cumberland-the-only-time-a-sitting-president-has-led-troops-into-battle/",
    description: "Historical account of Washington leading troops during the Whiskey Rebellion as sitting president.",
    source: "Allegany Museum",
    type: "Museum Resource",
    tags: ["whiskey-rebellion", "commander-in-chief", "presidency", "military"],
    period: "1794",
    reliability: "High",
    relatedSections: ["fun-facts", "presidency"]
  },
  {
    id: "history-smallpox-inoculation",
    title: "History.com - Smallpox Inoculation Campaign",
    url: "https://www.history.com/articles/smallpox-george-washington-revolutionary-war",
    description: "Account of Washington's mass inoculation campaign against smallpox in 1777.",
    source: "History.com",
    type: "Historical Analysis",
    tags: ["smallpox", "inoculation", "public-health", "revolutionary-war"],
    period: "1777",
    reliability: "High",
    relatedSections: ["fun-facts", "revolutionary-war"]
  },
  {
    id: "world-history-edu-third-term",
    title: "World History Edu - Refusing Third Term",
    url: "https://worldhistoryedu.com/why-did-george-washington-refuse-a-third-term-in-office/",
    description: "Analysis of Washington's decision to step down after two terms and its democratic significance.",
    source: "World History Edu",
    type: "Historical Analysis",
    tags: ["third-term", "democratic-precedents", "presidency"],
    period: "1796",
    reliability: "Medium",
    relatedSections: ["fun-facts", "presidency", "legacy"]
  },
  {
    id: "constitution-center-fascinating-facts",
    title: "Constitution Center - Distillery & Death Facts",
    url: "https://constitutioncenter.org/blog/fascinating-facts-about-george-washington-for-his-real-birthday",
    description: "Collection of interesting Washington facts including distillery and death details.",
    source: "Constitution Center",
    type: "Educational Resource",
    tags: ["distillery", "death", "birthday", "fascinating-facts"],
    period: "1732-1799",
    reliability: "High",
    relatedSections: ["fun-facts", "mount-vernon"]
  },
  {
    id: "funkids-washington-facts",
    title: "Fun Kids UK - Dancing & Social Activities",
    url: "https://www.funkidslive.com/learn/top-10-facts-about-george-washington",
    description: "Fun facts about Washington including his love of dancing and social activities.",
    source: "Fun Kids UK",
    type: "Educational Resource",
    tags: ["dancing", "social", "personal", "fun-facts"],
    period: "1732-1799",
    reliability: "Medium",
    relatedSections: ["fun-facts"]
  },
  {
    id: "tinybeans-hair-facts",
    title: "Tinybeans - Hair & Grooming Habits",
    url: "https://tinybeans.com/fun-facts-about-george-washington",
    description: "Personal facts about Washington including his hair style and grooming habits.",
    source: "Tinybeans",
    type: "Educational Resource",
    tags: ["hair", "grooming", "personal", "appearance"],
    period: "1732-1799",
    reliability: "Medium",
    relatedSections: ["fun-facts"]
  },
  {
    id: "patrick-henry-college-barbados",
    title: "Patrick Henry College - Barbados Trip & Smallpox",
    url: "https://www.phc.edu/news/2017/02/20/7-facts-about-george-washington",
    description: "Facts about Washington including his only trip abroad to Barbados and smallpox immunity.",
    source: "Patrick Henry College",
    type: "Educational Resource",
    tags: ["barbados", "smallpox", "travel", "immunity"],
    period: "1751",
    reliability: "High",
    relatedSections: ["fun-facts", "youth"]
  },
  {
    id: "pbs-medical-chart",
    title: "PBS - Washington's Medical History",
    url: "https://www.pbs.org/newshour/health/george-washingtons-medical-chart",
    description: "Medical analysis of Washington's various illnesses and survival through multiple diseases.",
    source: "PBS NewsHour",
    type: "Educational Resource",
    tags: ["medical", "illnesses", "health", "survival"],
    period: "1732-1799",
    reliability: "High",
    relatedSections: ["fun-facts"]
  },
  {
    id: "public-historian-napoleon",
    title: "Public Historian - Napoleon's Admiration",
    url: "https://publichistorian.com/2018/06/08/napoleon-washington/",
    description: "Analysis of Napoleon's admiration for Washington and their leadership comparison.",
    source: "Public Historian",
    type: "Historical Analysis",
    tags: ["napoleon", "admiration", "leadership", "global-fame"],
    period: "Analysis",
    reliability: "Medium",
    relatedSections: ["fun-facts", "legacy"]
  },
  {
    id: "heritage-foundation-kingship",
    title: "Heritage Foundation - Refusal of Kingship",
    url: "https://www.heritage.org/commentary/the-man-who-would-not-be-king",
    description: "Analysis of Washington's refusal of kingship and commitment to republican government.",
    source: "Heritage Foundation",
    type: "Historical Analysis",
    tags: ["kingship", "republic", "democracy", "refusal"],
    period: "1783",
    reliability: "High",
    relatedSections: ["fun-facts", "legacy", "presidency"]
  },
  {
    id: "lives-legacies-dollar-bill",
    title: "Lives & Legacies - How He Got on the $1 Bill",
    url: "https://livesandlegaciesblog.org/2019/08/08/how-george-ended-up-on-the-1-bill/",
    description: "Historical analysis of how Washington's portrait came to appear on the $1 bill since 1869.",
    source: "Lives and Legacies Blog",
    type: "Historical Analysis",
    tags: ["dollar-bill", "currency", "portrait", "recognition"],
    period: "1869-present",
    reliability: "Medium",
    relatedSections: ["washington-currency"]
  },
  {
    id: "usacoinbook-flanagan-designer",
    title: "USA Coin Book - Flanagan Quarter Design Story",
    url: "https://www.usacoinbook.com/encyclopedia/coin-designers/john-flanagan/",
    description: "Detailed account of John Flanagan's design process for the 1932 Washington quarter, based on Jean-Antoine Houdon's 1785 bust of Washington. Covers the controversial design competition where Treasury Secretary Andrew Mellon selected Flanagan's design over Laura Gardin Fraser's winning entry.",
    source: "USA Coin Book Encyclopedia",
    type: "Educational Resource",
    tags: ["flanagan", "quarter-design", "houdon-bust", "design-competition", "1932", "laura-fraser", "mellon"],
    period: "1931-1932",
    reliability: "Medium",
    relatedSections: ["washington-currency", "additional-facts"]
  },
  {
    id: "pcgs-quarter-faces",
    title: "PCGS - Quarter Design Evolution History",
    url: "https://www.pcgs.com/news/the-many-faces-of-the-george-washington-quarter",
    description: "Comprehensive history of Washington quarter design evolution from Flanagan's 1932 original through modern variants. Details the Houdon bust basis, William Cousins' 1999 modifications for State Quarters, and Laura Fraser's 2022 appearance on the American Women Quarters.",
    source: "PCGS (Professional Coin Grading Service)",
    type: "Educational Resource",
    tags: ["quarter", "design-evolution", "flanagan", "houdon-bust", "state-quarters", "fraser-design"],
    period: "1932-present",
    reliability: "High",
    relatedSections: ["washington-currency"]
  },
  {
    id: "time-dollar-design-history",
    title: "TIME - Dollar Bill Design History",
    url: "https://time.com/5383055/dollar-bill-design-history/",
    description: "Historical analysis of U.S. dollar bill design from colonial currency through modern security features. Covers Continental Currency, Civil War greenbacks, the 1929 size reduction, and the evolution of Washington's portrait placement.",
    source: "TIME Magazine",
    type: "Historical Analysis",
    tags: ["dollar-bill", "currency-evolution", "design-history", "greenbacks", "continental-currency"],
    period: "1775-2018",
    reliability: "High",
    relatedSections: ["washington-currency"]
  },
  {
    id: "mount-vernon-gilbert-stuart",
    title: "Mount Vernon - Gilbert Stuart & Athenaeum Portrait",
    url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/gilbert-stuart-1755-1828",
    description: "Comprehensive biography of Gilbert Stuart and detailed analysis of the Athenaeum portrait of Washington. Confirms that an engraving of this unfinished 1796 portrait is used on the one-dollar bill, making it the most recognizable image of Washington.",
    source: "Mount Vernon Digital Encyclopedia",
    type: "Museum Resource",
    tags: ["gilbert-stuart", "athenaeum-portrait", "dollar-bill", "1796", "portrait-artist", "unfinished-portrait"],
    period: "1755-1828",
    reliability: "High",
    relatedSections: ["washington-currency", "legacy"]
  },
  {
    id: "franconia-museum-slavery-complexity",
    title: "Franconia Museum - Slavery Historical Marker",
    url: "https://franconiahistory.com/historic-sites/slavery-at-mount-vernon-(historical-marker)",
    description: "Historical marker information about slavery at Mount Vernon, including Washington's contradictory attitudes and the 317 enslaved people at his death.",
    source: "Franconia Museum",
    type: "Museum Resource",
    tags: ["slavery", "mount-vernon", "contradiction", "legacy"],
    period: "1799",
    reliability: "High",
    relatedSections: ["slavery"]
  },
];

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
