'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scroll, Feather } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingFacts = [
  "George Washington was unanimously elected President by the Electoral College...",
  "He established many precedents that are still followed today...",
  "Washington voluntarily stepped down after two terms...",
  "He was the only founding father to free his slaves...",
  "Mount Vernon was his beloved home and agricultural laboratory..."
];

export default function EnhancedLoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setIsComplete(true);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const factTimer = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % loadingFacts.length);
    }, 2000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(factTimer);
    };
  }, [onComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1] as const
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 200,
        delay: 0.2
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="initial"
          exit="exit"
          className="fixed inset-0 z-[10000] bg-gradient-to-br from-museum-navy via-museum-navy-light to-museum-gold flex flex-col items-center justify-center text-white overflow-hidden"
        >
          
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0 bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          
          <motion.div
            className="absolute top-20 left-20 opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Scroll className="w-16 h-16" />
          </motion.div>
          
          <motion.div
            className="absolute top-32 right-32 opacity-20"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Feather className="w-12 h-12" />
          </motion.div>

          
          <div className="relative z-10 text-center space-y-8 px-8">
            
            <motion.div variants={logoVariants} initial="initial" animate="animate">
              <div className="relative">
                <motion.div
                  className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-museum-glow"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <img 
                    src="/quarter.png"
                    alt="Washington Quarter"
                    className="w-20 h-20 object-contain"
                  />
                </motion.div>
                
                
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute top-2 left-1/2 w-3 h-3 bg-museum-gold rounded-full transform -translate-x-1/2" />
                  <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-white/60 rounded-full transform -translate-x-1/2" />
                  <div className="absolute left-2 top-1/2 w-2 h-2 bg-museum-gold-light rounded-full transform -translate-y-1/2" />
                  <div className="absolute right-2 top-1/2 w-3 h-3 bg-white/40 rounded-full transform -translate-y-1/2" />
                </motion.div>
              </div>
            </motion.div>

            
            <motion.div variants={textVariants} initial="initial" animate="animate">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-2xl">
                George Washington
              </h1>
              <p className="font-body text-xl md:text-2xl lg:text-3xl italic opacity-90 mt-4">
                Digital Museum Experience
              </p>
            </motion.div>

            
            <motion.div
              className="h-16 flex items-center justify-center"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentFact}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-body text-lg md:text-xl max-w-2xl opacity-80"
                >
                  {loadingFacts[currentFact]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            
            <motion.div
              className="w-full max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="relative">
                
                <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-museum-gold to-white rounded-full shadow-museum-glow"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                
                
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm opacity-75">Loading Exhibition</span>
                  <span className="text-sm font-semibold">{progress}%</span>
                </div>
              </div>
            </motion.div>

            
            <motion.p
              className="font-body text-base opacity-60 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Preparing an immersive journey through the life and legacy of America&apos;s first president
            </motion.p>
          </div>

          
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
