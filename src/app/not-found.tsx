'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
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
        >
          <h1 className="font-display text-8xl lg:text-9xl font-bold text-museum-navy mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-museum-gold mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-museum-ink">
            Page Not Found
          </h2>
          <p className="font-body text-lg text-museum-sepia max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Return to the archive to continue exploring George Washington&apos;s legacy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 px-6 py-3 bg-museum-navy text-white rounded-lg font-medium hover:bg-museum-navy-light transition-all shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-6 py-3 bg-white text-museum-navy border-2 border-museum-navy rounded-lg font-medium hover:bg-museum-navy/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-8 text-sm text-museum-sepia"
        >
          <p>
            If you believe this is an error, please check the URL or navigate using the menu above.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

