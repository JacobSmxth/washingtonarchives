export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: SectionContent;
}

export interface SectionContent {
  intro?: string;
  paragraphs?: string[];
  subsections?: Subsection[];
  qaItems?: QAItem[];
  quote?: Quote;
  highlights?: Highlight[];
  images?: Image[];
  sources?: SourceReference[];
  sourceIds?: string[];
}

export interface SourceReference {
  title: string;
  url: string;
  type: string;
}

export interface QAItem {
  question: string;
  answer: string;
}

export interface Subsection {
  id: string;
  title: string;
  content: string;
  highlights?: BattleHighlight[];
}

export interface BattleHighlight {
  id: string;
  title: string;
  location: string;
  opponent: string;
  result: string;
}

export interface Quote {
  text: string;
  author: string;
  year?: string;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  icon?: string;
  category?: string;
  detailedDescription?: string;
  keyPoints?: string[];
  historicalContext?: string;
  relatedEvents?: string[];
  year?: string;
}

export interface Image {
  id: string;
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
}
