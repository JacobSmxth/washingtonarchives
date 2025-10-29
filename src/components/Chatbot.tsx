'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchSections, getSuggestedQuestions, SearchResult } from '@/utils/chatbotSearch';

interface ChatbotProps {
  onNavigate: (sectionId: string) => void;
}

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  results?: SearchResult[];
}

export default function Chatbot({ onNavigate }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      type: 'bot',
      content: 'Hello! Ask me anything about George Washington. I\'ll search through the archive to find relevant information.',
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (query: string) => {
    if (!query.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: query
    };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const results = searchSections(query);

      let botContent = '';
      if (results.length === 0) {
        botContent = `I couldn't find anything matching "${query}". Try different keywords or ask about specific topics like battles, slavery, presidency, or Mount Vernon.`;
      } else {
        botContent = `I found ${results.length} relevant ${results.length === 1 ? 'match' : 'matches'} about "${query}". Click on any result to navigate to that section.`;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botContent,
        results: results.length > 0 ? results : undefined
      };
      setMessages(prev => [...prev, botMessage]);
    }, 300);

    setInput('');
  };

  const handleSuggestedQuestion = (question: string) => {
    handleSubmit(question);
  };

  const handleResultClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
    setMessages([
      {
        id: '0',
        type: 'bot',
        content: 'Hello! Ask me anything about George Washington. I\'ll search through the archive to find relevant information.',
      }
    ]);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-br from-museum-gold to-museum-gold-dark text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-museum-gold/20"
          >
            <div className="bg-gradient-to-r from-museum-gold to-museum-gold-dark text-white p-4">
              <h3 className="font-display text-lg font-semibold">Washington Archive Assistant</h3>
              <p className="text-sm opacity-90">Keyword-based search</p>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-museum-parchment/30 to-warm-50/30">
              {messages.map(message => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-museum-gold text-white'
                      : 'bg-white border border-museum-gold/20 text-museum-ink'
                  }`}>
                    <p className="text-sm">{message.content}</p>

                    {message.results && message.results.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.results.map((result, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleResultClick(result.sectionId)}
                            className="w-full text-left p-2 bg-museum-parchment hover:bg-museum-gold/10 rounded border border-museum-gold/20 transition-colors duration-200"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-xs text-museum-gold truncate">
                                  {result.sectionTitle}
                                </p>
                                <p className="text-xs text-museum-ink-light mt-1 line-clamp-2">
                                  {result.matchedContent}
                                </p>
                              </div>
                              <span className="text-xs px-1.5 py-0.5 bg-museum-gold/20 text-museum-gold rounded shrink-0">
                                {result.matchType}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-museum-ink-light font-semibold">Suggested questions:</p>
                  {getSuggestedQuestions().slice(0, 4).map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="w-full text-left text-xs p-2 bg-white hover:bg-museum-gold/10 rounded border border-museum-gold/20 text-museum-ink transition-colors duration-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(input);
              }}
              className="p-4 bg-white border-t border-museum-gold/20"
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Washington..."
                  className="flex-1 px-4 py-2 border border-museum-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-museum-gold/50 text-sm"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="px-4 py-2 bg-museum-gold hover:bg-museum-gold-dark text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
