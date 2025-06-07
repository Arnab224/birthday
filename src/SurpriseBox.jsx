import { useState } from 'react';

export default function SurpriseBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 text-center">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg animate-bounce hover:bg-pink-700 transition"
        >
          🎁 Click to open your surprise
        </button>
      ) : (
        <div className="mt-6 text-2xl text-pink-800 font-semibold animate-fadeIn">
          💖 You are my favorite person in the world! I love you forever!
        </div>
      )}
    </div>
  );
}
