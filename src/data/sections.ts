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
  { id: "military-campaigns", label: "Military Campaigns" },
  { id: "washington-currency", label: "On the Currency" },
  { id: "additional-facts", label: "Additional Facts" },
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
          detailedDescription: "Washington coordinated diplomatic, military, and logistical efforts to sustain the Continental Army through eight years of war. He communicated regularly with Congress about the army's needs and strategic options. At Yorktown in 1781, he employed deception to convince the British that an attack on New York was imminent while moving forces to Virginia.",
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
          detailedDescription: "Washington reluctantly accepted the presidency in 1789, telling colleagues his 'movements to the chair of government will be accompanied by feelings not unlike those of a culprit who is going to the place of his execution.' By making clear his reluctance, Washington sent a powerful message. The presidency was not a prize to be sought, but a duty to be shouldered.",
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
        "In May 1754, Washington led an attack on a French detachment at Jumonville Glen where Joseph Coulon de Jumonville was killed. This clash escalated into the French and Indian War, marking Washington's entry into international conflict. Later that year, after constructing Fort Necessity, he was forced to surrender to superior French forces, the only surrender of his military career.",
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
        "Washington's strategic approach focused on preserving his army as a fighting force rather than seeking decisive battles that could destroy it. He adapted his tactics to circumstances, sometimes attacking boldly as at Trenton in December 1776, and sometimes withdrawing to avoid destruction. His strategy centered on outlasting British resolve while maintaining the Continental Army as a symbol of American resistance.",
        "With French assistance, Washington's forces trapped General Cornwallis's army at Yorktown in 1781, effectively ending the war. In victory, he told Americans they now held \"absolute freedom and Independency\" and were \"Lords and Proprietors of a vast Tract of Continent,\" with an \"opportunity for political happiness\" unparalleled in history."
      ],
      qaItems: [
        {
          question: "Context of \"desperate diseases require desperate remedies\"",
          answer: "In December 1776, facing expiring enlistments and inadequate artillery, Washington wrote to Congress justifying dramatic measures to save the army. He warned that short enlistments and reliance on militia were \"the origin of all our misfortunes\" and argued that the crisis demanded bold action."
        },
        {
          question: "Washington's view on military power",
          answer: "Despite commanding the Continental Army for eight years, Washington declared he wished only to \"turn the sword into a ploughshare.\" His surrender of military command to civilian authority in December 1783 demonstrated his commitment to republican government over personal ambition."
        },
        {
          question: "Valley Forge's significance",
          answer: "Washington's leadership during the winter of 1777-78 kept the Continental Army from disintegrating. He communicated regularly with Congress about the army's organizational needs and supply problems. The army that emerged from Valley Forge demonstrated improved discipline and training."
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
          content: "Washington created the first presidential cabinet and appointed capable leaders such as Alexander Hamilton, Thomas Jefferson and Henry Knox. He exercised executive authority with fairness and integrity. Thomas Jefferson said his justice was 'the most inflexible I have ever known.'"
        },
        {
          id: "title-precedents",
          title: "Presidential Title and Protocol",
          content: "Washington supported the simple title \"Mr. President\" for the chief executive, which the Senate adopted after debate. Though later presidents have added \"So help me God\" to the oath of office, no contemporary evidence confirms Washington did so at his 1789 inauguration. His approach to presidential protocol emphasized republican simplicity over monarchical formality."
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
        "The reality of slavery at Mount Vernon was harsh. Enslaved people developed specialized skills and worked from daybreak through dusk, making the estate self-sufficient and enriching Washington. About fifty slaves escaped over the years, though many were recaptured. Washington's actions could be severe. He threatened to hang slaves' dogs to prevent escape and bought teeth from enslaved people for his dentures.",
        "In his will, Washington emancipated the 123 enslaved people that he personally owned after Martha's death, making him unique among the leading founders. However, this did not free the majority of enslaved people at Mount Vernon, who were \"dower\" slaves belonging to the Custis estate and could not legally be freed by Washington.",
        "Washington's contradictory attitudes toward slavery are one of the great mysteries of his life and legacy. At his death, 317 enslaved people lived at Mount Vernon, and in his will he ordered those he directly owned to be freed. This contradiction between fighting for liberty while benefiting from slavery represents one of the fundamental tensions in his legacy."
      ],
      qaItems: [
        {
          question: "Washington's contradiction on slavery and liberty",
          answer: "Washington benefited from enslaved labor while championing liberty and natural rights. This contradiction reflects the fundamental moral compromises of the founding era. He never resolved this tension during his lifetime."
        },
        {
          question: "Legal constraints on emancipation at Mount Vernon",
          answer: "Many enslaved people at Mount Vernon were \"dower\" slaves from Martha's first marriage to the Custis family. Virginia law classified them as property of Martha's estate, preventing Washington from freeing them even through his will."
        },
        {
          question: "Historical assessment of Washington and slavery",
          answer: "Scholars recognize Washington's relationship with slavery as a central contradiction in his legacy. He fought for liberty while his wealth and status depended on enslaved labor, embodying the tensions and moral compromises that characterized the founding era."
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
          content: "Mount Vernon was more than just Washington's home. It was his refuge, his laboratory for agricultural innovation, and the center of his world. The estate reflects both his personal tastes and his role as a Virginia planter."
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
          content: "Mount Vernon was a working plantation where Washington managed his business affairs, entertained guests, and found peace from the demands of public life. It was here that he could be himself: a Virginia planter, husband, and stepfather."
        },
        {
          id: "modern-preservation",
          title: "Modern Preservation",
          content: "Today, Mount Vernon is preserved as a museum and educational center, offering visitors insight into Washington's private life and the world of 18th-century Virginia. The estate continues to serve as a symbol of Washington's legacy and the complex history of early America."
        }
      ],
      quote: {
        text: "I can truly say I had rather be at Mount Vernon with a friend or two about me, than to be attended at the Seat of Government by the Officers of State and the Representatives of every Power in Europe.",
        author: "George Washington to David Stuart",
        year: "June 15, 1790"
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
      intro: "Washington's public image emphasized stern dignity and seriousness, but his personal correspondence reveals occasional dry wit and irony. His letters contain moments of humor, particularly when discussing military frustrations or offering advice to younger relatives.",
      paragraphs: [
        "Washington's correspondence demonstrates that beneath his formal public persona existed a man capable of wry observations and self-deprecating remarks."
      ],
      subsections: [
        {
          id: "death-rumors-humor",
          title: "Youthful Bravado (1754)",
          content: "After the skirmish at Jumonville Glen on May 31, 1754, the young Washington wrote to his brother: 'You may, indeed, tell the world that I have heard the bullets whistle; and believe me, there is something charming in the sound.' This letter reflects the perspective of a 22-year-old officer experiencing his first combat."
        },
        {
          id: "presidential-drama",
          title: "Presidential Reluctance (1789)",
          content: "Washington described his feelings about assuming the presidency with characteristic self-deprecation: 'My movements to the chair of government will be accompanied by feelings not unlike those of a culprit who is going to the place of his execution.' This comparison reflected his genuine reluctance to leave retirement and his anxiety about the new office."
        },
        {
          id: "nephew-advice-humor",
          title: "Advice to His Nephew (1783)",
          content: "In a letter to his nephew Bushrod, Washington offered guidance with occasional wit: 'Do not conceive that fine Clothes make fine Men, any more than fine feathers make fine Birds. A man who has been dressing all his life has more in his head than his heels.' He also warned against gambling, calling it 'a vice which is productive of every possible evil.'"
        },
        {
          id: "military-sarcasm-examples",
          title: "Military Observations",
          content: "Washington's correspondence occasionally revealed frustration with military challenges. He wrote of stubborn officers: 'There are some men who would rather lose friends than lose their opinions.' Reflecting on his responsibilities, he observed: 'The reflection upon my situation and that of this Army produces many an uneasy hour when all around me are wrapped in sleep.'"
        },
        {
          id: "social-humor-examples",
          title: "Social Conduct",
          content: "Washington copied the Rules of Civility as a youth, establishing his foundation for proper conduct. He maintained formal dignity in social situations while occasionally offering subtle observations. Anecdotes about his social wit exist, though many lack primary source verification."
        },
        {
          id: "farming-humor",
          title: "Agricultural Interests",
          content: "Washington wrote frequently about his farming efforts at Mount Vernon. In correspondence about his agricultural experiments, he acknowledged challenges: 'I am endeavoring to get into the mode of farming, but I confess I find it a very difficult task.' These remarks revealed his serious commitment to improving agricultural practices."
        },
        {
          id: "political-humor",
          title: "Presidential Challenges",
          content: "Washington's letters about governing revealed the pressures of the presidency. Regarding appointments, he wrote: 'I am much at a loss to know what to do with the applications for office. I have not yet learned to say no with a good grace.' This comment reflected the genuine difficulty of managing patronage requests."
        }
      ],
      quote: {
        text: "Do not conceive that fine Clothes make fine Men. Avoid Gaming. This is a vice which is productive of every possible evil.",
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
    id: "military-campaigns",
    title: "Military Campaigns",
    content: {
      intro: "From the wilderness of the French and Indian War to the decisive victory at Yorktown, George Washington personally led troops in over 20 major battles and sieges. This interactive map shows where Washington fought and ultimately secured American independence.",
      paragraphs: [
        "Washington's military genius wasn't in winning every battle. He lost more than he won. His true brilliance was in keeping his army together through brutal winters, devastating defeats, and chronic supply shortages. He understood that the Continental Army's survival was more important than any single victory."
      ],
      subsections: [],
      quote: {
        text: "Desperate diseases require desperate remedies. I have no lust after power, and wish with as much fervency as any man upon this wide extended continent for an opportunity of turning the sword into a ploughshare.",
        author: "George Washington to John Hancock",
        year: "December 20, 1776"
      }
    }
  },
  {
    id: "washington-currency",
    title: "Washington on the Currency",
    content: {
      intro: "George Washington's image has graced American currency for over 150 years, making him one of the most recognizable faces in American history. From the $1 bill to the quarter, Washington's stern, dignified portrait appears in the hands of nearly every American daily, ensuring his memory remains woven into the fabric of American life.",
      paragraphs: [
        "Washington's presence on American currency represents more than just historical recognition. It's a daily reminder of the nation's founding and Washington's role as the \"Father of His Country.\" Every time Americans handle money, they encounter Washington's likeness, making him one of the most frequently encountered historical figures in modern America."
      ],
      subsections: [
        {
          id: "dollar-bill-history",
          title: "The $1 Bill: Washington's Most Common Image",
          content: "Washington's portrait has appeared on the $1 bill since 1869, making him one of the most recognizable faces in America. His placement on the lowest denomination bill ensures that nearly every American handles his image regularly, a fitting tribute to the \"Father of His Country.\" The $1 bill features Washington's portrait on the front and the Great Seal of the United States on the back, symbolizing his role in the nation's founding. The portrait is based on Gilbert Stuart's famous \"Athenaeum\" portrait from 1796, an unfinished work that became the most reproduced image of Washington."
        },
        {
          id: "quarter-anniversary",
          title: "The Quarter: 200-Year Anniversary Design",
          content: "The Washington quarter was first minted in 1932 to commemorate the 200-year anniversary of Washington's birth (1732). This special commemorative coin replaced the longstanding \"Liberty Head\" design that had been used since 1892. The choice of Washington reflected his unique status as America's preeminent founding figure."
        },
        {
          id: "artistic-heritage",
          title: "Artistic Heritage: The Houdon Bust",
          content: "The Washington quarter portrait is based on Jean-Antoine Houdon's famous 1785 marble bust, considered the most accurate likeness of Washington created during his lifetime. Houdon spent two weeks at Mount Vernon studying Washington's features, creating what historians call the definitive portrait of the first president. The quarter design was created by John Flanagan in 1932, though his design was controversial as Treasury Secretary Andrew Mellon selected it over Laura Gardin Fraser's winning entry."
        },
        {
          id: "design-elements",
          title: "Design Elements and Symbolism",
          content: "Washington's currency designs incorporate various symbolic elements. The $1 bill includes the Great Seal, an eagle, and the phrase \"In God We Trust.\" The quarter features an eagle on the reverse side. These elements reflect the values and symbols that Washington helped establish for the new nation."
        },
        {
          id: "cultural-significance",
          title: "Cultural Significance and Recognition",
          content: "Washington's currency presence has become so ubiquitous that most Americans can instantly recognize his profile by memory. His image appears in countless films, photographs, and documents, making Washington one of the most frequently encountered historical figures in modern America. The phrase \"In God We Trust\" and \"E Pluribus Unum\" that appear on currency reflect the values Washington helped establish for the nation."
        },
      ],
      quote: {
        text: "I can truly say I had rather be at Mount Vernon with a friend or two about me, than to be attended at the Seat of Government by the Officers of State and the Representatives of every Power in Europe.",
        author: "George Washington to David Stuart",
        year: "June 15, 1790"
      },
      images: [
        {
          id: "washington-dollar-bill",
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marshu.com%2Farticles%2Fimages-website%2Farticles%2Fpresidents-on-us-paper-money%2Fone-dollar-bill-large.jpg&f=1&nofb=1&ipt=799358f8d1bc42df46682dd243b1b64ea42c0bf5ed96322024e800e1d7c91ffe",
          alt: "Washington on the $1 Bill",
          caption: "George Washington on the $1 bill, the most common currency in America"
        },
        {
          id: "washington-quarter-image",
          src: "/quarter.png",
          alt: "Washington Quarter",
          caption: "The Washington Quarter, featuring his profile since 1932"
        }
      ],
      sources: [
        {
          title: "How George Ended Up on the $1 Bill",
          url: "https://livesandlegaciesblog.org/2019/08/08/how-george-ended-up-on-the-1-bill/",
          type: "Historical Analysis"
        },
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
  },
  {
    id: "additional-facts",
    title: "Additional Facts",
    content: {
      intro: "George Washington's life included many details that complicate his popular image. These facts distinguish documented history from later mythology and illustrate various aspects of his personal life and public career.",
      paragraphs: [
        "These facts provide context for understanding Washington beyond simplified popular narratives."
      ],
      subsections: [
        {
          id: "foundational-facts",
          title: "Foundational & Debunking Facts",
          content: "Many popular stories about Washington are myths created after his death by biographers seeking to illustrate his character."
        },
        {
          id: "teeth-myth",
          title: "The Teeth Myth",
          content: "Washington's false teeth were made from gold, ivory, carved animal bone, and human teeth purchased from enslaved people he owned, not wood. This fact reveals both the medical practices of the era and Washington's complex relationship with slavery."
        },
        {
          id: "cherry-tree-myth",
          title: "The Cherry Tree Myth",
          content: "The famous \"I cannot tell a lie\" story was fabricated by biographer Mason Weems in the 5th edition of his book, published seven years after Washington's death, with no primary sources supporting it. This myth became so popular that many Americans still believe it today."
        },
        {
          id: "unanimous-president",
          title: "Unanimous President",
          content: "Washington is the only president to receive all electoral votes unanimously for both of his terms. This outcome reflected his unique status and the trust placed in him by the new nation."
        },
        {
          id: "white-house-fact",
          title: "White House Connection",
          content: "Washington was the only president who never lived in the White House, though he oversaw its construction and specified its location in 1791. The building wasn't completed until after his presidency ended."
        },
        {
          id: "education-fact",
          title: "Limited Formal Education",
          content: "Washington's formal schooling ended when he was 11 years old after his father died, cutting him off from the opportunity to be educated abroad in England like his older half-brothers. Despite this, he became one of the most learned men of his era through self-education."
        },
        {
          id: "military-rank",
          title: "Highest Military Rank",
          content: "In 1976, during the Nation's Bicentennial, Washington was posthumously promoted to General of the Armies of the United States, the highest rank in the U.S. military. This honor recognizes his crucial role in the nation's founding."
        },
        {
          id: "title-precedents",
          title: "Presidential Precedents",
          content: "Washington established numerous precedents as first president, including the two-term tradition and the creation of a cabinet. He supported the simple title \"Mr. President,\" which Congress adopted after debate, rejecting more grandiose alternatives."
        },
        {
          id: "no-political-party",
          title: "No Political Party",
          content: "Washington opposed political factionalism and remained non-partisan throughout his presidency, making him the only United States president to do so. His Farewell Address specifically warned against the dangers of political parties."
        },
        {
          id: "slaveholder-complexity",
          title: "Slaveholder Complexity",
          content: "Washington's contradictory attitudes toward slavery are one of the great mysteries of his life and legacy. At his death, 317 enslaved people lived at Mount Vernon, and in his will he ordered those he directly owned to be freed."
        },
        {
          id: "first-veto",
          title: "First Presidential Veto",
          content: "In 1792, Washington issued the very first presidential veto on an apportionment bill, establishing this important check on congressional power. The veto was overridden, but the precedent was set."
        },
        {
          id: "no-middle-name",
          title: "No Middle Name",
          content: "His full legal name was George Washington. Middle names were uncommon in colonial Virginia, and Washington never adopted one."
        },
        {
          id: "delaware-crossing-reality",
          title: "Delaware Crossing Reality",
          content: "The iconic painting misrepresents the event. In reality, thousands of troops crossed the Delaware River in a coordinated operation on Christmas night, 1776. The famous painting shows Washington standing in a small boat, but the actual crossing involved many boats and careful planning."
        }
      ],
      qaItems: [
        {
          question: "Personal habits and interests",
          answer: "Washington was an accomplished horseman and bred hounds for fox hunting, giving them names like \"Drunkard,\" \"Tipsy,\" and \"Sweet Lips.\" He enjoyed dancing and frequently attended social gatherings."
        },
        {
          question: "Physical stature",
          answer: "Washington stood approximately 6'2\", which was tall for his era. Later accounts sometimes exaggerated his height to nearly 6'6\". His stature contributed to his commanding presence."
        },
        {
          question: "Dietary preferences",
          answer: "Washington frequently ate hoecakes, cornmeal pancakes served with butter and honey, particularly at breakfast. This simple food remained a preference throughout his life."
        },
        {
          question: "Hair and appearance",
          answer: "Washington did not wear a wig. He powdered his own white hair, following the fashion of the time. This practice reflected his attention to proper appearance and formal presentation."
        },
        {
          question: "International travel",
          answer: "Washington left North America only once, traveling to Barbados in 1751 with his half-brother Lawrence. During this trip he contracted smallpox and survived, gaining lifelong immunity that would prove valuable during his military service."
        },
        {
          question: "Death and final illness",
          answer: "On December 13, 1799, Washington developed a severe throat infection and died within 48 hours, likely from acute epiglottitis. His sudden death shocked the nation."
        },
        {
          question: "Calendar and birthdate",
          answer: "Washington was born on February 11, 1731 under the Julian calendar. After Britain adopted the Gregorian calendar in 1752, his birthdate became February 22, 1732, the date now celebrated."
        },
        {
          question: "Health and resilience",
          answer: "Washington survived smallpox, tuberculosis, malaria, dysentery, and pneumonia during his lifetime. He lived to 67, a considerable age for the 18th century."
        }
      ],
      quote: {
        text: "I can truly say I had rather be at Mount Vernon with a friend or two about me, than to be attended at the Seat of Government by the Officers of State and the Representatives of every Power in Europe.",
        author: "George Washington to David Stuart",
        year: "June 15, 1790"
      }
    }
  }
];
