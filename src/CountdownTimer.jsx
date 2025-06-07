import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Digit({ value }) {
  return (
    <motion.span
      key={value}
      initial={{ rotateX: 90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      exit={{ rotateX: -90, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-block w-6 md:w-8 font-mono font-bold text-pink-300"
    >
      {value}
    </motion.span>
  );
}

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const total = new Date(targetDate) - new Date();
      const seconds = Math.max(0, Math.floor((total / 1000) % 60));
      const minutes = Math.max(0, Math.floor((total / 1000 / 60) % 60));
      const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
      const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="mt-6 text-center text-3xl md:text-4xl font-mono text-pink-300 flex justify-center gap-4">
      <div>
        <Digit value={timeLeft.days} />d
      </div>
      <div>
        <Digit value={timeLeft.hours} />h
      </div>
      <div>
        <Digit value={timeLeft.minutes} />m
      </div>
      <div>
        <Digit value={timeLeft.seconds} />s
      </div>
    </div>
  );
}
