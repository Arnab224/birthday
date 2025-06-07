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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 px-4 py-8">
      {/* Confetti Animation */}
      <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-pink-800 mb-4 text-center drop-shadow-lg">
        🎉 Happy Birthday, Sona! 🎉
      </h1>
      <p className="mb-10 text-xl md:text-2xl text-pink-700 text-center max-w-xl">
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
