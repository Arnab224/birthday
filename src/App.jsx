import React from 'react';
import Confetti from 'react-confetti';
import PhotoGallery from './PhotoGallery';
import MemoriesCarousel from './MemoriesCarousel';
import CountdownTimer from './CountdownTimer';
import SurpriseBox from './SurpriseBox';
import { useWindowSize } from 'react-use';

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-900 via-pink-700 to-pink-800 px-4 py-8">
      {/* Confetti Animation */}
      <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />

      {/* Heading */}
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-center text-neonPink animate-neonText">
        🎉 Happy Birthday, Sona! 🎉
      </h1>
      <p className="mb-10 text-2xl md:text-3xl text-pink-300 text-center max-w-xl drop-shadow-lg animate-glow">
        You make the world brighter just by being in it 💖
      </p>

      {/* Components */}
      <CountdownTimer targetDate="2025-06-08T00:00:00" />
      <MemoriesCarousel />
      <PhotoGallery />
      <SurpriseBox />
    </div>
  );
}
