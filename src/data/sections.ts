import { Section, NavigationItem } from "@/types";

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home" },
  { id: "youth", label: "Youth" },
  { id: "military-early", label: "Early Military" },
  { id: "revolutionary-war", label: "Revolutionary War" },
  { id: "constitutional-convention", label: "Constitutional Convention" },
  { id: "presidency", label: "Presidency" },
  { id: "farewell-address", label: "Farewell Address" },
  { id: "legacy", label: "Legacy" },
  { id: "slavery", label: "On Slavery" },
  { id: "mount-vernon", label: "Mount Vernon" },
  { id: "washington-humor", label: "Washington's Humor" },
  { id: "battle-record", label: "Battle Record" },
  { id: "washington-quarter", label: "On the Quarter" },
];

export const sections: Section[] = [
  {
    id: "home",
    title: "The Father of His Country",
    content: {
      intro: "George Washington was born in Virginia on February 22, 1732, and became the first president of the United States. He served as commander in chief of the Continental Army during the Revolution and presided over the Constitutional Convention. Henry Lee's eulogy captured his national image: \"first in war, first in peace and first in the hearts of his countrymen.\" Washington believed there was \"an indissoluble union between virtue and happiness\" and that America's republican experiment was \"staked on the experiment entrusted to the hands of the American people.\"",
      quote: {
        text: "Respectable characters speak of a monarchical form of government without horror... What a triumph for the advocates of despotism to find that we are incapable of governing ourselves.",
        author: "George Washington to John Jay",
        year: "August 15, 1786"
      },
      highlights: [
        {
          id: "revolutionary-leadership",
          title: "Revolutionary Leadership",
          description: "Washington's perseverance during the Revolution, strategic adaptability, and moral authority shaped America's path to independence.",
          category: "Military",
          year: "1775-1783",
          icon: "sword",
          detailedDescription: "Washington became America's first national security strategist, wielding diplomatic, informational, military, and economic instruments of power. His 38-page memorandum to Congress was a 'minor masterpiece of military administration' that 'ultimately laid the basis for victory at Monmouth and Yorktown.' Though he faced intelligence failures like Brandywine in 1777, he mastered brilliant deception at Yorktown in 1781, convincing the British an attack on New York was coming while moving on Virginia.",
          keyPoints: [
            "In December 1776, when enlistments were expiring, told Congress: 'Desperate diseases require desperate remedies'",
            "Insisted he had 'no lust after power' and wished only to 'turn the sword into a ploughshare'",
            "After victory at Trenton, wrote that an accident prevented more troops from crossing, otherwise the plan would have succeeded 'to our warmest wishes'",
            "His winter at Valley Forge became legendary for survival, reorganization, and training"
          ],
          historicalContext: "Washington's surprise attack on Trenton and subsequent victory at Princeton revived American morale. He adapted strategy to avoid destruction of his army, and his persistence during the bleak winter at Valley Forge kept the cause alive.",
          relatedEvents: ["Battle of Trenton", "Valley Forge", "Siege of Yorktown", "Battle of Princeton"]
        },
        {
          id: "constitutional-vision",
          title: "Constitutional Vision", 
          description: "Washington's support for a stronger federal government and his role as presiding officer of the Convention.",
          category: "Government",
          year: "1787",
          icon: "scroll",
          detailedDescription: "After the war, Washington watched with dismay as the Articles of Confederation proved unable to collect revenue or maintain order. In 1787 he ended his retirement to attend the Philadelphia convention and was unanimously chosen to preside over it. Although he rarely spoke, he was determined that the delegates should devise a government with real 'energy and authority.'",
          keyPoints: [
            "Called for the convention to 'adopt no temporizing expedients but probe the defects of the Constitution to the bottom and provide a radical cure'",
            "Wrote to James Madison calling for an 'energetic Constitution'",
            "His unanimous election as convention president reflected widespread trust",
            "His limited participation in debate helped preserve neutrality as presiding officer"
          ],
          historicalContext: "His concern over the Confederation's weakness led him to support constitutional reform. After the Convention, Washington's reputation helped secure ratification, and his efforts were crucial in Virginia, where the Constitution passed by only one vote.",
          relatedEvents: ["Constitutional Convention", "Virginia Ratification", "First Presidential Election", "Hamilton's Financial Plan"]
        },
        {
          id: "presidential-precedent",
          title: "Presidential Precedent",
          description: "Establishing the presidency, balancing power, and modeling civic virtue through reluctant leadership.",
          category: "Leadership",
          year: "1789-1797",
          icon: "crown",
          detailedDescription: "Washington reluctantly accepted the presidency in 1789, telling colleagues his 'movements to the chair of government will be accompanied by feelings not unlike those of a culprit who is going to the place of his execution.' By making clear his reluctance, Washington sent a powerful message: the presidency was not a prize to be sought, but a duty to be shouldered.",
          keyPoints: [
            "Argued there is 'an indissoluble union between virtue and happiness' and that the destiny of republican government is staked on their experiment",
            "Advised Congress that national policy should be laid in 'pure and immutable principles of private morality'",
            "On the Whiskey Rebellion, noted that while he would exercise constitutional powers with firmness, he believed it consistent with the public good to 'mingle every degree of moderation and tenderness'",
            "Created the presidential cabinet and established the two-term tradition"
          ],
          historicalContext: "Washington created the presidential cabinet, set the precedent of serving only two terms, established executive authority while respecting republican limits, oversaw Hamilton's financial program, and maintained neutrality in foreign affairs.",
          relatedEvents: ["First Presidential Inauguration", "Whiskey Rebellion", "Hamilton's Financial Plan", "Neutrality Proclamation"]
        },
        {
          id: "complex-legacy",
          title: "Complex Legacy",
          description: "The contradiction between Washington's role as a champion of liberty and his participation in slavery.",
          category: "Social Issues",
          year: "1732-1799",
          icon: "balance-scale",
          detailedDescription: "By the time of his death, Washington owned 123 enslaved people outright and held another 153 through his wife's estate. Historian Philip Morgan observed that Washington called slavery an 'abomination,' yet he was a 'stern taskmaster' who found fault with enslaved workers. More than 300 slaves labored at Mount Vernon by 1799, and many worked from daybreak through dusk.",
          keyPoints: [
            "Washington threatened to hang slaves' dogs to prevent escape and purchased teeth from enslaved people for his dentures",
            "About fifty slaves escaped from Mount Vernon over the years, though many were recaptured",
            "In his will, Washington ordered that all the enslaved people he personally owned be freed after Martha's death",
            "He could not free those controlled by the Custis estate, and slavery remained integral to Mount Vernon"
          ],
          historicalContext: "Washington inherited enslaved people as a young man, married into additional human property, managed a large enslaved workforce at Mount Vernon, gradually became uncomfortable with slavery after the Revolution, but continued to benefit from their labor throughout his life.",
          relatedEvents: ["Mount Vernon Plantation", "Marriage to Martha Custis", "Will and Testament", "Emancipation after Martha's Death"]
        }
      ],
      images: [
        {
          id: "primary-portrait",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/800px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
          alt: "George Washington Portrait by Gilbert Stuart",
          caption: "George Washington by Gilbert Stuart",
          className: "primary-portrait"
        }
      ]
    }
  },
  {
    id: "youth",
    title: "Early Life & Family",
    content: {
      paragraphs: [
        "Washington was born at Pope's Creek Plantation, Virginia on February 22, 1732. When his father Augustine died at age 11, young George inherited a plantation with about ten enslaved people. This early responsibility shaped his character, teaching him discipline and the practical realities of managing land and labor.",
        "After Augustine's death, his half-brother Lawrence became a crucial mentor, introducing George to Virginia's elite society and military traditions. Washington worked alongside his mother to manage the farm, developing the efficiency and attention to detail that would serve him throughout his life.",
        "Unlike many Virginia gentlemen, Washington received limited formal education. Instead, he focused on practical skills, studying mathematics and geometry for surveying. He copied \"Rules of Civility and Decent Behaviour,\" which taught him the manners and self-control that would later distinguish him in public life."
      ],
      qaItems: [
        {
          question: "What was Washington's first surveying expedition like?",
          answer: "In 1748, young Washington undertook a surveying expedition across the Blue Ridge Mountains. His journal reveals both hardships and wonder. At one lodging, he found the \"bed\" to be only a mat of straw infested with \"lice and fleas,\" leading him to sleep outdoors by a fire instead."
        },
        {
          question: "How did the Shenandoah Valley influence him?",
          answer: "During the same expedition, Washington was captivated by the Shenandoah Valley, writing: \"we went through most beautiful Groves of Sugar Trees and spent the best part of the Day in admiring the Trees and richness of the Land.\" This early exposure to the frontier would shape his vision of America's potential."
        }
      ],
      quote: {
        text: "We went through most beautiful Groves of Sugar Trees and spent the best part of the Day in admiring the Trees and richness of the Land.",
        author: "George Washington's Journal",
        year: "1748"
      },
      images: [
        {
          id: "family-portrait",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Edward_Savage_-_The_Washington_Family_-_Google_Art_Project.jpg/1280px-Edward_Savage_-_The_Washington_Family_-_Google_Art_Project.jpg",
          alt: "Washington Family Portrait by Edward Savage",
          caption: "The Washington Family by Edward Savage, c. 1789-1796"
        }
      ],
      sources: [
        {
          title: "George Washington Biography",
          url: "http://mountvernon.org/george-washington/biography",
          type: "Museum Resource"
        },
        {
          title: "Early Life & Education",
          url: "https://founders.archives.gov/documents/Washington/01-01-02-0001-0002",
          type: "Primary Source"
        }
      ]
    }
  },
  {
    id: "military-early",
    title: "Early Military Experience",
    content: {
      paragraphs: [
        "Washington's military career began when he joined the Virginia militia in 1752, quickly rising to major and then lieutenant colonel. His first major assignment came in 1753 when Virginia's Lieutenant Governor sent him on a winter journey to Fort Le Boeuf to deliver Britain's demand that the French leave the Ohio Valley.",
        "In May 1754, Washington led an attack on a French detachment at Jumonville Glen where Joseph Coulon de Jumonville was killed. This clash escalated into the French and Indian War, marking Washington's entry into international conflict. Later that year, after constructing Fort Necessity, he was forced to surrender to superior French forces - the only surrender of his military career.",
        "Washington's service as aide-de-camp to British General Edward Braddock proved equally instructive. When Braddock was mortally wounded in 1755, Washington helped organize the retreat and learned that European military tactics were often unsuited to American frontier conditions."
      ],
      qaItems: [
        {
          question: "What lessons did these early defeats teach Washington?",
          answer: "These experiences taught Washington crucial lessons about preparation, the importance of understanding terrain, and the challenges of frontier warfare. He learned to adapt tactics to American conditions rather than relying on European methods."
        },
        {
          question: "How did these experiences shape his later leadership?",
          answer: "The defeats exposed him to the complexities of colonial-British relations and the difficulties of coordinating diverse forces. This early frustration with British military leadership may have influenced his later willingness to challenge British authority."
        }
      ],
      quote: {
        text: "I heard the bullets whistle, and, believe me, there is something charming in the sound.",
        author: "George Washington",
        year: "1754"
      },
      images: [
        {
          id: "young-soldier",
          src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3.amazonaws.com%2Fmtv-main-assets%2Ffiles%2Fresources%2Fgw-portrait-p44-jpeg.jpg&f=1&nofb=1&ipt=0cf8e64cd9783f64cfba42cfe2fa517397f3f47a8c4b5b2c60c1fa56c5ae5f03",
          alt: "Young Washington in Military Uniform", 
          caption: "Washington as a young officer during the French and Indian War"
        }
      ],
      sources: [
        {
          title: "Battle of Jumonville Glen",
          url: "https://www.britannica.com/event/Battle-of-Jumonville-Glen",
          type: "Reference Source"
        },
        {
          title: "Fort Necessity",
          url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/fort-necessity",
          type: "Museum Resource"
        },
        {
          title: "Battle of the Monongahela",
          url: "https://en.wikipedia.org/wiki/Battle_of_the_Monongahela",
          type: "Reference Source"
        },
        {
          title: "French and Indian War Service",
          url: "https://en.wikipedia.org/wiki/George_Washington_in_the_French_and_Indian_War",
          type: "Reference Source"
        }
      ]
    }
  },
  {
    id: "revolutionary-war",
    title: "Revolutionary War Leadership",
    content: {
      paragraphs: [
        "When Washington was unanimously chosen to command the Continental Army in June 1775, he lacked experience with large formations but quickly learned to keep the army together despite chronic shortages of men and supplies. His greatest challenge came during the winter of 1777-78 at Valley Forge, where his army suffered from cold, hunger, and desertion.",
        "Washington's strategic genius lay not in grand battles but in preserving his army as a symbol of American resistance. He embraced guerrilla tactics, avoided decisive battles when possible, and focused on outlasting British resolve. His bold attack on Trenton in December 1776 revived American morale and demonstrated his ability to strike when least expected.",
        "With French assistance, Washington's forces trapped General Cornwallis's army at Yorktown in 1781, effectively ending the war. In victory, he told Americans they now held \"absolute freedom and Independency\" and were \"Lords and Proprietors of a vast Tract of Continent,\" with an \"opportunity for political happiness\" unparalleled in history."
      ],
      qaItems: [
        {
          question: "What did Washington mean by \"desperate diseases require desperate remedies\"?",
          answer: "In December 1776, facing expiring enlistments and inadequate artillery, Washington wrote to Congress justifying dramatic measures to save the army. He warned that short enlistments and reliance on militia were \"the origin of all our misfortunes\" and argued that desperate times required bold action."
        },
        {
          question: "How did Washington show he had \"no lust for power\"?",
          answer: "Despite commanding the Continental Army for eight years, Washington declared he wished only to \"turn the sword into a ploughshare.\" His willingness to share hardships with his troops and his eventual surrender of military command proved his commitment to republican ideals over personal ambition."
        },
        {
          question: "What made his Valley Forge leadership so important?",
          answer: "Washington's leadership during the brutal winter of 1777-78 kept the Continental Army from disintegrating. His 38-page memorandum to Congress was a \"minor masterpiece of military administration\" that ultimately laid the foundation for victories at Monmouth and Yorktown."
        }
      ],
      quote: {
        text: "Desperate diseases require desperate remedies. I have no lust after power, and wish with as much fervency as any man upon this wide extended continent for an opportunity of turning the sword into a ploughshare.",
        author: "George Washington to John Hancock",
        year: "December 20, 1776"
      },
      images: [
        {
          id: "crossing-delaware",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg/960px-Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg",
          alt: "Washington Crossing the Delaware",
          caption: "Washington Crossing the Delaware, by Emanuel Leutze (1851)"
        }
      ]
    }
  },
  {
    id: "constitutional-convention",
    title: "The Constitutional Convention",
    content: {
      paragraphs: [
        "After the war, Washington watched with dismay as the Articles of Confederation proved unable to collect revenue or maintain order. When Shays' Rebellion erupted in Massachusetts, it convinced him that stronger federal government was essential for the nation's survival.",
        "In 1787, Washington ended his retirement to attend the Philadelphia convention and was unanimously chosen to preside over it. Although he rarely spoke during the debates, his presence lent crucial credibility to the proceedings. He was determined that delegates should devise a government with real \"energy and authority.\"",
        "Washington's endorsement of the Constitution proved crucial to ratification. His reputation helped convince skeptical Americans that the new government would not become tyrannical. In Virginia, where the Constitution passed by only one vote, his influence was decisive."
      ],
      qaItems: [
        {
          question: "What did Washington want the convention to accomplish?",
          answer: "Washington called for the convention to \"adopt no temporizing expedients but probe the defects of the Constitution to the bottom and provide a radical cure.\" He had written to James Madison calling for an \"energetic Constitution\" that could effectively govern the new nation."
        },
        {
          question: "Why was his role as president of the convention so important?",
          answer: "Washington's unanimous election as convention president reflected widespread trust in his judgment and integrity. His limited participation in debate helped preserve his neutrality as presiding officer while his presence symbolized the unity the new government would need."
        },
        {
          question: "How did his war experience influence his views on government?",
          answer: "His struggles with an ineffective Continental Congress during the war convinced him that America needed a government capable of raising revenue, maintaining order, and coordinating national defense. The Articles of Confederation had proven inadequate for these essential tasks."
        }
      ],
      quote: {
        text: "The preservation of the sacred fire of liberty and the destiny of the republican model of government are justly considered as deeply, perhaps as finally, staked on the experiment entrusted to the hands of the American people.",
        author: "George Washington",
        year: "First Inaugural Address, 1789"
      },
      images: [
        {
          id: "constitution-signing",
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FMkD5bgjxWAc%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=6c315e820d2dd50e24ced1c3fa5ea06e0b34aa03b95b89748ee30b73ea2f920e",
          alt: "Constitutional Convention",
          caption: "The Constitutional Convention of 1787"
        }
      ]
    }
  },
  {
    id: "presidency",
    title: "The Presidency",
    content: {
      subsections: [
        {
          id: "first-inauguration",
          title: "First Inauguration",
          content: "On April 30, 1789, Washington acknowledged his anxiety about assuming the presidency and asked Congress to join him in prayers that the 'Great Author may enable every instrument employed in the government's administration to execute with success.' He observed that the U.S. owed its independence to divine providence and argued that no people were more bound to acknowledge the Invisible Hand than Americans."
        },
        {
          id: "moral-philosophy",
          title: "Moral Philosophy and Precedents",
          content: "Washington stressed that the success of the new government depended on virtue: there is 'an indissoluble union between virtue and happiness' and preservation of liberty depends on observing 'the eternal rules of order and right which Heaven itself has ordained.' He avoided recommending specific measures, instead praising the talents and patriotism of Congress and trusting that they would lay the national policy on 'pure and immutable principles of private morality.'"
        },
        {
          id: "organizing-executive",
          title: "Organizing the Executive Branch",
          content: "Washington created the first presidential cabinet and appointed capable leaders such as Alexander Hamilton, Thomas Jefferson and Henry Knox. He exercised executive authority with fairness and integrity; Thomas Jefferson said his justice was 'the most inflexible I have ever known.'"
        },
        {
          id: "domestic-challenges",
          title: "Domestic Challenges: The Whiskey Rebellion",
          content: "In an address to Congress on December 8, 1795, Washington reported that the region that had recently rebelled against the whiskey tax was now peaceful and that he had pardoned most offenders. He explained that while he would exercise constitutional powers firmly, he believed it was consistent with the public good to 'mingle in the operations of government every degree of moderation and tenderness.'"
        },
        {
          id: "foreign-policy",
          title: "Foreign Policy",
          content: "Washington insisted on neutrality during the French Revolutionary Wars, believing that war would endanger American commerce and finances. His refusal to ally with Britain or France set the precedent of non-entanglement."
        }
      ],
      quote: {
        text: "There is an indissoluble union between virtue and happiness, and that the preservation of the sacred fire of liberty and the destiny of the republican model of government are justly considered as deeply, perhaps as finally, staked on the experiment entrusted to the hands of the American people.",
        author: "George Washington",
        year: "First Inaugural Address, 1789"
      },
      images: [
        {
          id: "presidential-portrait",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/800px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
          alt: "Washington Presidential Portrait",
          caption: "Portrait of George Washington by Gilbert Stuart"
        }
      ]
    }
  },
  {
    id: "farewell-address",
    title: "The Farewell Address",
    content: {
      subsections: [
        {
          id: "presidential-farewell",
          title: "A Presidential Farewell (1796)",
          content: "Washington's Farewell Address, published in September 1796, announced his decision not to seek a third term as president. Written with the help of Alexander Hamilton and James Madison, the address provided Washington's final guidance to the American people."
        },
        {
          id: "key-themes",
          title: "Key Themes",
          content: "The address emphasized several crucial themes: the importance of national unity, the dangers of political parties, the need for fiscal responsibility, and the wisdom of avoiding foreign entanglements. These principles would influence American politics for generations."
        },
        {
          id: "warning-parties",
          title: "Warning Against Political Parties",
          content: "Washington warned against the \"baneful effects of the spirit of party,\" arguing that political parties could divide the nation and undermine the common good. His warning proved prescient as the Federalist and Democratic-Republican parties emerged during his presidency."
        },
        {
          id: "foreign-policy-guidance",
          title: "Foreign Policy Guidance",
          content: "Washington's advice on foreign policy emphasized neutrality and avoiding permanent alliances. This guidance would influence American foreign policy for over a century, becoming known as the \"Washington Doctrine.\""
        },
        {
          id: "address-legacy",
          title: "Legacy of the Address",
          content: "The Farewell Address became one of the most influential documents in American history. It was read annually in Congress for many years and continues to be studied as a guide to American political principles."
        }
      ],
      quote: {
        text: "The alternate domination of one faction over another, sharpened by the spirit of revenge, natural to party dissension, which in different ages and countries has perpetrated the most horrid enormities, is itself a frightful despotism.",
        author: "George Washington",
        year: "Farewell Address, 1796"
      },
      images: [
        {
          id: "farewell-address",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Washington%27s_Farewell_Address.jpg/640px-Washington%27s_Farewell_Address.jpg",
          alt: "Washington's Farewell Address",
          caption: "Washington's Farewell Address, published in the American Daily Advertiser"
        }
      ]
    }
  },
  {
    id: "legacy",
    title: "Enduring Legacy",
    content: {
      subsections: [
        {
          id: "father-country",
          title: "The Father of His Country",
          content: "Washington's legacy as \"Father of His Country\" reflects his unique role in the founding of the United States. His leadership during the Revolution, his presidency, and his character established him as the symbol of American virtue and leadership."
        },
        {
          id: "presidential-precedents",
          title: "Presidential Precedents",
          content: "Washington established countless precedents that continue to shape the presidency today. From the two-term tradition to the creation of the cabinet, his actions defined the office for all future presidents. His dignified conduct set the standard for presidential behavior."
        },
        {
          id: "military-leadership",
          title: "Military Leadership",
          content: "Washington's military leadership during the Revolution demonstrated the importance of perseverance, strategic thinking, and the ability to inspire loyalty. His approach to command influenced American military doctrine for generations."
        },
        {
          id: "american-values",
          title: "Symbol of American Values",
          content: "Washington became the embodiment of American values: integrity, self-sacrifice, civic virtue, and devotion to the common good. His image appears on currency, monuments, and countless public buildings, making him the most recognizable figure in American history."
        },
        {
          id: "complex-legacy",
          title: "Complex Legacy",
          content: "Modern historians recognize Washington's complexity. While celebrating his achievements, they also examine his contradictions, particularly regarding slavery. This nuanced understanding enriches our appreciation of both his greatness and his humanity."
        }
      ],
      quote: {
        text: "First in war, first in peace, and first in the hearts of his countrymen.",
        author: "Henry Lee's eulogy for Washington",
        year: "1799"
      },
      images: [
        {
          id: "washington-monument",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Washington_Monument_Dusk_Jan_2006.jpg/500px-Washington_Monument_Dusk_Jan_2006.jpg",
          alt: "Washington Monument at Dusk",
          caption: "The Washington Monument at dusk, symbol of his enduring legacy"
        }
      ]
    }
  },
  {
    id: "slavery",
    title: "Washington and Slavery",
    content: {
      paragraphs: [
        "At Washington's death in 1799, more than 300 enslaved people labored at his Mount Vernon estate, which encompassed about 8,000 acres with five farms. He owned 123 enslaved people outright and held another 153 through his wife's estate. According to historian Philip Morgan, Washington tied himself into \"moral knots\" over slavery, reportedly calling the practice \"an abomination\" while also being known as a \"stern taskmaster.\"",
        "The reality of slavery at Mount Vernon was harsh. Enslaved people developed specialized skills and worked from daybreak through dusk, making the estate self-sufficient and enriching Washington. About fifty slaves escaped over the years, though many were recaptured. Washington's actions could be severe: he threatened to hang slaves' dogs to prevent escape and bought teeth from enslaved people for his dentures.",
        "In his will, Washington emancipated the 123 enslaved people that he personally owned after Martha's death, making him unique among the leading founders. However, this did not free the majority of enslaved people at Mount Vernon, who were \"dower\" slaves belonging to the Custis estate and could not legally be freed by Washington."
      ],
      qaItems: [
        {
          question: "How did Washington justify slavery while fighting for liberty?",
          answer: "This contradiction reveals the fundamental moral compromise of the founding era. Washington benefited enormously from enslaved labor while publicly championing freedom and natural rights. He never resolved this tension, embodying the broader contradictions of American society."
        },
        {
          question: "Why didn't Washington free all the enslaved people at Mount Vernon?",
          answer: "Many of the enslaved people at Mount Vernon were \"dower\" slaves who came through Martha's first marriage to the Custis family. Virginia law prevented Washington from freeing these individuals, as they were considered property of Martha's estate, not his personal property."
        },
        {
          question: "What do modern historians say about Washington and slavery?",
          answer: "Scholars today consider Washington's relationship with slavery one of the fundamental contradictions in his legacy. He fought for liberty while building his wealth and status on enslaved labor, representing the broader tensions and moral compromises of the founding era that continue to shape American history."
        }
      ],
      quote: {
        text: "Washington tied himself into 'moral knots' over slavery. He reportedly called the practice 'an abomination,' yet he was a 'stern taskmaster' who constantly found fault with enslaved workers.",
        author: "Historian Philip Morgan",
        year: "Modern Assessment"
      },
      images: [
        {
          id: "slave-quarters",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Female_Slave_Quarters_interior_04_-_Mount_Vernon_-_2014-10-20.jpg/640px-Female_Slave_Quarters_interior_04_-_Mount_Vernon_-_2014-10-20.jpg",
          alt: "Mount Vernon Slave Quarters Interior",
          caption: "Interior of the female slave quarters at Mount Vernon, showing the harsh living conditions"
        }
      ]
    }
  },
  {
    id: "mount-vernon",
    title: "Mount Vernon",
    content: {
      subsections: [
        {
          id: "washington-home",
          title: "Washington's Home",
          content: "Mount Vernon was more than just Washington's home—it was his refuge, his laboratory for agricultural innovation, and the center of his world. The estate reflects both his personal tastes and his role as a Virginia planter."
        },
        {
          id: "acquisition-development",
          title: "Acquisition and Development",
          content: "Washington inherited Mount Vernon from his half-brother Lawrence in 1754. Over the years, he expanded the estate from 2,000 to 8,000 acres and transformed the house from a modest farmhouse into an elegant mansion that reflected his growing status and wealth."
        },
        {
          id: "agricultural-innovation",
          title: "Agricultural Innovation",
          content: "Washington was an innovative farmer who experimented with new crops, crop rotation, and agricultural techniques. He was particularly interested in improving soil fertility and increasing crop yields, making Mount Vernon a model of progressive agriculture."
        },
        {
          id: "the-mansion",
          title: "The Mansion",
          content: "The Mount Vernon mansion, with its distinctive cupola and piazza, became one of the most recognizable buildings in America. Washington's attention to detail in its design and decoration reflected his desire to create a home worthy of his status and aspirations."
        },
        {
          id: "life-mount-vernon",
          title: "Life at Mount Vernon",
          content: "Mount Vernon was a working plantation where Washington managed his business affairs, entertained guests, and found peace from the demands of public life. It was here that he could be himself—a Virginia planter, husband, and stepfather."
        },
        {
          id: "modern-preservation",
          title: "Modern Preservation",
          content: "Today, Mount Vernon is preserved as a museum and educational center, offering visitors insight into Washington's private life and the world of 18th-century Virginia. The estate continues to serve as a symbol of Washington's legacy and the complex history of early America."
        }
      ],
      quote: {
        text: "I had rather be on my farm than be emperor of the world.",
        author: "George Washington to Marquis de Lafayette",
        year: "1797"
      },
      images: [
        {
          id: "mount-vernon-mansion",
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FT30tqyu2j8c%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=e7888bc6e1a5f957af61719158993df4fb12fb24f35dcc03aa4078692c27f3fe",
          alt: "Mount Vernon Mansion",
          caption: "Mount Vernon mansion and grounds, Washington's beloved home and estate"
        }
      ]
    }
  },
  {
    id: "washington-humor",
    title: "Washington's Humor",
    content: {
      intro: "George Washington's public image was one of stern dignity and unwavering seriousness, yet his personal correspondence reveals a dry wit and remarkable ability to find humor even in the darkest circumstances. Unlike the humorless marble statues that later immortalized him, the real Washington appreciated wordplay, told jokes, and used sarcasm with precision.",
      paragraphs: [
        "These glimpses of Washington's lighter side remind us that the \"Father of His Country\" was actually a human being with a sense of humor. His wit ranged from gentle irony to sharp sarcasm, particularly when dealing with bureaucratic frustrations or military incompetence."
      ],
      subsections: [
        {
          id: "rumors-wit",
          title: "Rumors of Death: A Classic Example (1755)",
          content: "After the bloody Battle of Monongahela in 1755, rumors spread that Washington had been killed. In a letter to his brother, he displayed his characteristic dry humor: 'You may, indeed, tell the world that I have heard the bullets whistle; and believe me, there is something charming in the sound.' When word of his supposed death circulated in Virginia, he joked that 'though people were kindly circulating a full account of my death and dying Speech, I have not yet written it—because I was very much alive.'"
        },
        {
          id: "presidential-reluctance",
          title: "Presidential Melodrama (1789)",
          content: "Washington's famous description of his inauguration reveals his theatrical flair and self-awareness: 'My movements to the chair of government will be accompanied by feelings not unlike those of a culprit who is going to the place of his execution.' This dramatic comparison shows Washington's ability to turn even reluctant heroism into compelling narrative."
        },
        {
          id: "nephew-wisdom",
          title: "Uncle George's Practical Advice (1783)",
          content: "To his nephew Bushrod, Washington offered both guidance and gentle humor about youthful vanity: 'Do not conceive that fine Clothes make fine Men, any more than fine feathers make fine Birds. A man who has been dressing all his life has more in his head than his heels.' His warning about gambling included a particularly witty observation: 'This is a vice which is productive of every possible evil,' mixing moral advice with practical wisdom."
        },
        {
          id: "military-sarcasm",
          title: "Military Frustrations and Sarcasm",
          content: "Washington's wit often emerged in response to military bureaucracy and incompetence. During the Revolutionary War, he once wrote of an incompetent officer: 'There are some men who would rather lose friends than lose their opinions.' On another occasion, reflecting on the Continental Army's challenges, he observed: 'The reflection upon my situation and that of this Army produces many an uneasy hour when all around me are wrapped in sleep.' This blend of personal reflection and institutional criticism shows his sophisticated sense of irony."
        },
        {
          id: "social-graces",
          title: "Social Humor and Grace",
          content: "Washington's Rules of Civility, which he copied as a youth, provided the foundation for both proper conduct and clever conversation. Despite maintaining formal dignity, he could deliver subtle compliments and sarcastic observations with precision. When a French officer complimented his height, Washington reportedly replied: 'We have been working hard for America, and our stature shows it.' His ability to turn even physical descriptions into patriotic statements demonstrates his wit at work."
        }
      ],
      quote: {
        text: "Do not conceive that fine Clothes make fine Men … avoid Gaming — This is a vice which is productive of every possible evil.",
        author: "George Washington to Bushrod Washington",
        year: "1783"
      },
      sources: [
        {
          title: "Rumors of His Death (1755)",
          url: "https://founders.archives.gov/documents/Washington/02-01-02-0169",
          type: "Primary Source"
        },
        {
          title: "Advice to His Nephew (1783)",
          url: "https://founders.archives.gov/documents/Washington/99-01-02-10429",
          type: "Primary Source"
        },
        {
          title: "On Becoming President (1789)",
          url: "https://www.smithsonianmag.com/history/george-washington-the-reluctant-president-49492",
          type: "Secondary Source"
        }
      ]
    }
  },
  {
    id: "battle-record",
    title: "Washington's Battle Record",
    content: {
      intro: "George Washington's military career spanned over four decades, from the French and Indian War through the Revolutionary War. His battle record reveals a commander who learned from defeats, capitalized on victories, and ultimately emerged with one of history's most consequential military legacies.",
      paragraphs: [
        "Washington's willingness to learn from his mistakes transformed him from a young, inexperienced officer into one of the most capable military leaders of his era. His defeats proved as valuable as his victories in shaping both his character and America's destiny."
      ],
      subsections: [
        {
          id: "early-career",
          title: "Early Military Career (1752-1758)",
          content: "Washington began his military service in the Virginia militia at age 20, quickly rising to command positions despite his lack of formal military education. His early campaigns in the French and Indian War provided crucial experience that would later prove invaluable during the Revolution."
        },
        {
          id: "decisive-victories",
          title: "Decisive Victories That Changed History",
          content: "Washington's most important victories came at critical moments. At Trenton (December 1776), his daring Christmas night crossing revived a collapsing cause. At Princeton (January 1777), his follow-up victory convinced Congress and the French that America could win. At Yorktown (October 1781), his siege with French allies trapped Cornwallis and effectively ended the war."
        },
        {
          id: "strategic-defeats",
          title: "Strategic Defeats and Lessons Learned",
          content: "Fort Necessity (1754) taught Washington about supply lines and siege warfare—his only formal surrender. Long Island (August 1776) showed his skill at preserving an army through retreat. Brandywine (September 1777) revealed the challenge of defending against British flanking tactics."
        },
        {
          id: "evolution-tactics",
          title: "Evolution of Tactics and Strategy",
          content: "Washington gradually shifted from European linear tactics to adapted American warfare. He learned to avoid pitched battles when possible, harass enemy supply lines, and concentrate forces for decisive strikes. His emphasis on army preservation over territorial control ultimately won the war."
        },
        {
          id: "continental-army",
          title: "Building the Continental Army",
          content: "Perhaps Washington's greatest achievement was transforming a collection of militia units into a professional Continental Army. Through Valley Forge's crucible, he imposed discipline, improved tactics, and created a military force capable of standing against British regulars."
        }
      ],
      quote: {
        text: "Desperate diseases require desperate remedies. I have no lust after power, and wish with as much fervency as any man upon this wide extended continent for an opportunity of turning the sword into a ploughshare.",
        author: "George Washington to John Hancock",
        year: "December 20, 1776"
      },
      sources: [
        {
          title: "Washington's Revolutionary War Battles",
          url: "https://www.mountvernon.org/george-washington/the-revolutionary-war/washingtons-revolutionary-war-battles/",
          type: "Museum Resource"
        },
        {
          title: "Battle of Jumonville Glen (1754)",
          url: "https://www.britannica.com/event/Battle-of-Jumonville-Glen",
          type: "Reference Source"
        },
        {
          title: "Fort Necessity (1754)",
          url: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/fort-necessity",
          type: "Museum Resource"
        },
        {
          title: "Battle of the Monongahela (1755)",
          url: "https://en.wikipedia.org/wiki/Battle_of_the_Monongahela",
          type: "Reference Source"
        },
        {
          title: "French and Indian War Service",
          url: "https://en.wikipedia.org/wiki/George_Washington_in_the_French_and_Indian_War",
          type: "Reference Source"
        },
        {
          title: "Battle of Fort Necessity",
          url: "https://www.britannica.com/topic/Battle-of-Fort-Necessity",
          type: "Reference Source"
        }
      ]
    }
  },
  {
    id: "washington-quarter",
    title: "Washington on the Quarter",
    content: {
      intro: "George Washington's portrait has appeared on the United States quarter for nearly a century, making it one of the most recognizable symbols of American currency and history. From the 200-year anniversary of his birth in 1932 to today, Washington's stern, dignified profile has remained largely unchanged, becoming an enduring part of American daily life.",
      paragraphs: [
        "The Washington quarter represents more than just currency—it's a daily reminder of the nation's founding and Washington's role as the \"Father of His Country.\" Every time Americans see this coin, they encounter Washington's likeness, ensuring his memory remains woven into the fabric of American life."
      ],
      subsections: [
        {
          id: "anniversary-design",
          title: "1932: 200-Year Anniversary Design",
          content: "The Washington quarter was first minted in 1932 to commemorate the 200-year anniversary of Washington's birth (1732). This special commemorative coin replaced the longstanding \"Liberty Head\" design that had been used since 1892. The choice of Washington reflected his unique status as America's preeminent founding figure."
        },
        {
          id: "houdon-bust",
          title: "Artistic Heritage: The Houdon Bust",
          content: "Sculptor John Flanagan based Washington's quarter portrait on Houdon's famous 1785 marble bust, considered the most accurate likeness of Washington created during his lifetime. Houdon spent two weeks at Mount Vernon studying Washington's features, creating what historians call the definitive portrait of the first president."
        },
        {
          id: "material-changes",
          title: "From Silver to Clad: Material Evolution",
          content: "Originally minted in 90% silver, quarters remained precious metal currency until 1965, when rising silver costs forced the U.S. Mint to switch to copper-nickel clad composition. This change reflected broader economic shifts while preserving Washington's iconic profile design."
        },
        {
          id: "cultural-impact",
          title: "Cultural Impact and Recognition",
          content: "The Washington quarter has become so ubiquitous that most Americans can instantly recognize Washington's profile by memory. The coin appears in countless films, photographs, and documents, making Washington one of the most frequently encountered historical figures in modern America."
        }
      ],
      quote: {
        text: "I had rather be on my farm than be emperor of the world.",
        author: "George Washington to Marquis de Lafayette",
        year: "1797"
      },
      images: [
        {
          id: "washington-quarter-image",
          src: "/quarter.png",
          alt: "Washington Quarter",
          caption: "The Washington Quarter, featuring his profile since 1932"
        }
      ],
      sources: [
        {
          title: "Washington Quarter History",
          url: "https://www.usmint.gov/learn/coins-and-medals/circulating-coins/quarter",
          type: "Official Source"
        },
        {
          title: "Quarter Design Details",
          url: "https://en.wikipedia.org/wiki/Washington_quarter",
          type: "Reference Source"
        }
      ]
    }
  }
];
