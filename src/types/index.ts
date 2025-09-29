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
  sourceIds?: string[]; // References to centralized sources database
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
