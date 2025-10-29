'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // gotta log this so i can debug if something breaks
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-museum-parchment via-white to-warm-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <AlertCircle className="w-10 h-10 text-red-600" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-museum-ink">
            An Error Occurred
          </h1>
          <div className="w-24 h-1 bg-museum-gold mx-auto mb-6"></div>
          <p className="font-body text-lg text-museum-sepia max-w-md mx-auto leading-relaxed">
            We encountered an unexpected error while loading the archive. This may be a temporary issue.
          </p>
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-left max-w-md mx-auto">
              <p className="font-mono text-xs text-red-800 break-all">
                {error.message}
              </p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
        >
          <button
            onClick={reset}
            className="group flex items-center gap-2 px-6 py-3 bg-museum-navy text-white rounded-lg font-medium hover:bg-museum-navy-light transition-all shadow-lg hover:shadow-xl"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="group flex items-center gap-2 px-6 py-3 bg-white text-museum-navy border-2 border-museum-navy rounded-lg font-medium hover:bg-museum-navy/10 transition-all"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-8 text-sm text-museum-sepia"
        >
          <p>
            If this problem persists, please try refreshing the page or clearing your browser cache.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

