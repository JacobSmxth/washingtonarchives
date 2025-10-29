export interface BattleLocation {
  id: string;
  name: string;
  year: string;
  coordinates: [number, number];
  result: 'victory' | 'defeat' | 'inconclusive';
  opponent: string;
  description: string;
  war: 'french-indian' | 'revolutionary';
}

export const battleLocations: BattleLocation[] = [
  {
    id: 'jumonville-glen',
    name: 'Battle of Jumonville Glen',
    year: '1754',
    coordinates: [39.877586, -79.640617],
    result: 'victory',
    opponent: 'French forces',
    description: 'Washington\'s first military engagement, sparking the French and Indian War.',
    war: 'french-indian'
  },
  {
    id: 'fort-necessity',
    name: 'Battle of Fort Necessity',
    year: '1754',
    coordinates: [39.8153, -79.5894],
    result: 'defeat',
    opponent: 'French forces',
    description: 'Washington\'s only surrender, forced to give up Fort Necessity.',
    war: 'french-indian'
  },
  {
    id: 'monongahela',
    name: 'Battle of the Monongahela',
    year: '1755',
    coordinates: [40.3931, -79.8653],
    result: 'defeat',
    opponent: 'French and Native American forces',
    description: 'Braddock\'s Defeat - Washington helped organize the retreat after General Braddock was mortally wounded.',
    war: 'french-indian'
  },
  {
    id: 'fort-ligonier',
    name: 'Battle of Fort Ligonier',
    year: '1758',
    coordinates: [40.2428, -79.2378],
    result: 'victory',
    opponent: 'French and Delaware forces',
    description: 'Successful defense of Fort Ligonier during the Forbes Expedition.',
    war: 'french-indian'
  },
  {
    id: 'siege-boston',
    name: 'Siege of Boston',
    year: '1775-76',
    coordinates: [42.33, -71.04],
    result: 'victory',
    opponent: 'British forces under General Howe',
    description: 'Washington\'s forces fortified Dorchester Heights, forcing British evacuation.',
    war: 'revolutionary'
  },
  {
    id: 'long-island',
    name: 'Battle of Long Island',
    year: '1776',
    coordinates: [40.6782, -73.9442],
    result: 'defeat',
    opponent: 'British forces under General Howe',
    description: 'Major defeat but Washington successfully evacuated his army across the East River.',
    war: 'revolutionary'
  },
  {
    id: 'harlem-heights',
    name: 'Battle of Harlem Heights',
    year: '1776',
    coordinates: [40.8122, -73.9540],
    result: 'victory',
    opponent: 'British light infantry',
    description: 'Morale-boosting victory after the defeat at Long Island.',
    war: 'revolutionary'
  },
  {
    id: 'white-plains',
    name: 'Battle of White Plains',
    year: '1776',
    coordinates: [41.0339, -73.7629],
    result: 'defeat',
    opponent: 'British forces under General Howe',
    description: 'British tactical victory but failed to destroy Washington\'s army.',
    war: 'revolutionary'
  },
  {
    id: 'fort-washington',
    name: 'Battle of Fort Washington',
    year: '1776',
    coordinates: [40.8649, -73.9363],
    result: 'defeat',
    opponent: 'British and Hessian forces',
    description: 'Devastating loss of the fort and nearly 3,000 American prisoners.',
    war: 'revolutionary'
  },
  {
    id: 'trenton',
    name: 'Battle of Trenton',
    year: '1776',
    coordinates: [40.2171, -74.7429],
    result: 'victory',
    opponent: 'Hessian forces under Colonel Rall',
    description: 'Famous Christmas crossing of the Delaware River led to crucial victory.',
    war: 'revolutionary'
  },
  {
    id: 'assunpink-creek',
    name: 'Battle of Assunpink Creek',
    year: '1777',
    coordinates: [40.2000, -74.7390],
    result: 'victory',
    opponent: 'British forces under Cornwallis',
    description: 'Second Battle of Trenton - Washington held the line at Assunpink Creek.',
    war: 'revolutionary'
  },
  {
    id: 'princeton',
    name: 'Battle of Princeton',
    year: '1777',
    coordinates: [40.3335, -74.6512],
    result: 'victory',
    opponent: 'British forces under Lt. Col. Mawhood',
    description: 'Bold maneuver after Trenton, further boosting American morale.',
    war: 'revolutionary'
  },
  {
    id: 'brandywine',
    name: 'Battle of Brandywine',
    year: '1777',
    coordinates: [39.8767, -75.5775],
    result: 'defeat',
    opponent: 'British forces under General Howe',
    description: 'British outflanked Washington, opening the way to Philadelphia.',
    war: 'revolutionary'
  },
  {
    id: 'germantown',
    name: 'Battle of Germantown',
    year: '1777',
    coordinates: [40.0323, -75.1755],
    result: 'defeat',
    opponent: 'British forces under General Howe',
    description: 'Complex assault failed due to fog and confusion, but impressed French allies.',
    war: 'revolutionary'
  },
  {
    id: 'monmouth',
    name: 'Battle of Monmouth',
    year: '1778',
    coordinates: [40.2652, -74.2743],
    result: 'inconclusive',
    opponent: 'British forces under General Clinton',
    description: 'Washington rallied troops after Charles Lee\'s retreat; battle ended in stalemate.',
    war: 'revolutionary'
  },
  {
    id: 'yorktown',
    name: 'Siege of Yorktown',
    year: '1781',
    coordinates: [37.2296, -76.5090],
    result: 'victory',
    opponent: 'British forces under Cornwallis',
    description: 'Decisive victory with French assistance, effectively ending the Revolutionary War.',
    war: 'revolutionary'
  }
];
