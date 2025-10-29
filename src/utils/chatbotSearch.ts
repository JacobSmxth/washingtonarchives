import { sections } from '@/data/sections';

export interface SearchResult {
  sectionId: string;
  sectionTitle: string;
  matchedContent: string;
  relevanceScore: number;
  matchType: 'title' | 'intro' | 'paragraph' | 'qa' | 'subsection' | 'quote' | 'highlight';
}

// filtering out all the junk words that don't matter
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
  'by', 'from', 'as', 'is', 'was', 'are', 'were', 'be', 'been', 'being', 'have',
  'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may',
  'might', 'can', 'about', 'what', 'when', 'where', 'who', 'how', 'why', 'which'
]);

function extractKeywords(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2 && !STOP_WORDS.has(word));
}

function calculateRelevance(text: string, keywords: string[]): number {
  const lowerText = text.toLowerCase();
  let score = 0;

  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    const matches = lowerText.match(regex);
    if (matches) {
      score += matches.length * 2;
    }

    if (lowerText.includes(keyword)) {
      score += 1;
    }
  });

  return score;
}

export function searchSections(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const keywords = extractKeywords(query);
  if (keywords.length === 0) return [];

  const results: SearchResult[] = [];

  sections.forEach(section => {
    const titleScore = calculateRelevance(section.title, keywords);
    if (titleScore > 0) {
      results.push({
        sectionId: section.id,
        sectionTitle: section.title,
        matchedContent: section.title,
        relevanceScore: titleScore * 3,
        matchType: 'title'
      });
    }

    if (section.content.intro) {
      const introScore = calculateRelevance(section.content.intro, keywords);
      if (introScore > 0) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          matchedContent: section.content.intro.substring(0, 200) + '...',
          relevanceScore: introScore * 2,
          matchType: 'intro'
        });
      }
    }

    section.content.paragraphs?.forEach(paragraph => {
      const paraScore = calculateRelevance(paragraph, keywords);
      if (paraScore > 0) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          matchedContent: paragraph.substring(0, 200) + '...',
          relevanceScore: paraScore,
          matchType: 'paragraph'
        });
      }
    });

    section.content.qaItems?.forEach(qa => {
      const qaText = `${qa.question} ${qa.answer}`;
      const qaScore = calculateRelevance(qaText, keywords);
      if (qaScore > 0) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          matchedContent: `Q: ${qa.question}\nA: ${qa.answer.substring(0, 150)}...`,
          relevanceScore: qaScore * 1.5,
          matchType: 'qa'
        });
      }
    });

    section.content.subsections?.forEach(subsection => {
      const subText = `${subsection.title} ${subsection.content}`;
      const subScore = calculateRelevance(subText, keywords);
      if (subScore > 0) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          matchedContent: `${subsection.title}: ${subsection.content.substring(0, 150)}...`,
          relevanceScore: subScore,
          matchType: 'subsection'
        });
      }
    });

    if (section.content.quote) {
      const quoteText = `${section.content.quote.text} ${section.content.quote.author}`;
      const quoteScore = calculateRelevance(quoteText, keywords);
      if (quoteScore > 0) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          matchedContent: `"${section.content.quote.text}" - ${section.content.quote.author}`,
          relevanceScore: quoteScore,
          matchType: 'quote'
        });
      }
    }

    section.content.highlights?.forEach(highlight => {
      const highlightText = `${highlight.title} ${highlight.description} ${highlight.detailedDescription || ''}`;
      const highlightScore = calculateRelevance(highlightText, keywords);
      if (highlightScore > 0) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          matchedContent: `${highlight.title}: ${highlight.description}`,
          relevanceScore: highlightScore,
          matchType: 'highlight'
        });
      }
    });
  });

  return results
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3);
}

export function getSuggestedQuestions(): string[] {
  return [
    "What were Washington's major battles?",
    "Tell me about Washington and slavery",
    "What was Washington's role in the Constitutional Convention?",
    "What did Washington say about political parties?",
    "Tell me about Mount Vernon",
    "What were Washington's presidential precedents?",
    "What happened at Valley Forge?",
    "How did Washington die?",
  ];
}
