import React from 'react';
import Confetti from 'react-confetti';
import PhotoGallery from './PhotoGallery';
import MemoriesCarousel from './MemoriesCarousel';
import CountdownTimer from './CountdownTimer';
import SurpriseBox from './SurpriseBox';
import { useWindowSize } from 'react-use';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
      <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mt-10 text-center">
        🎉 Happy Birthday, Sona! 🎉
      </h1>
      <p className="mt-4 text-lg md:text-xl text-pink-700 text-center">
        You make the world brighter just by being in it 💖
      </p>

      <CountdownTimer targetDate="2025-06-09T00:00:00" />
      <MemoriesCarousel />
      <PhotoGallery />
      <SurpriseBox />
    </div>
  );
}
