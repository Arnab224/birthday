import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export default function SurpriseBox() {
  const [open, setOpen] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  // Trigger confetti when opened
  useEffect(() => {
    if (open) {
      setConfettiActive(true);
      const timer = setTimeout(() => setConfettiActive(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div className="mt-10 text-center relative">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="px-8 py-4 bg-neonPink text-white rounded-full shadow-lg animate-bounceOnce hover:bg-pink-700 hover:shadow-neonPinkLight transition duration-300 text-xl font-semibold"
        >
          🎁 Click to open your surprise
        </button>
      ) : (
        <>
          {/* Confetti Burst */}
          {confettiActive && (
            <Confetti
              recycle={false}
              numberOfPieces={150}
              gravity={0.2}
              colors={['#f9a8d4', '#db2777', '#fff']}
              width={window.innerWidth}
              height={window.innerHeight}
            />
          )}

          {/* Animated Surprise Text */}
          <motion.div
            className="mt-6 text-3xl md:text-4xl text-neonPink font-extrabold drop-shadow-lg select-none"
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          >
            💖 You are my favorite person in the world! I love you forever! 💖
          </motion.div>

          {/* Heart Burst Animation */}
          <AnimatePresence>
            {confettiActive && (
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="pink"
                  stroke="hotpink"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="80"
                  height="80"
                  className="drop-shadow-2xl"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.5 4 6 4c1.5 0 3 1.2 3 3.3C9 5.2 10.5 4 12 4c2.5 0 4 2 4 4.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
