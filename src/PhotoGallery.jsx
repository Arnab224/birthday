import { motion } from 'framer-motion';

export default function PhotoGallery() {
  const images = [
    '/images/pic1.jpeg',
    '/images/pic2.jpeg',
    '/images/pic3.jpeg',
  ];

  return (
    <div className="mt-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-neonPinkLight mb-6 text-center drop-shadow-md animate-glow">
        🎂 Cherished Memories 🎂
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Memory ${i + 1}`}
            className="w-40 h-40 rounded-2xl shadow-lg object-cover border-4 border-neonPink cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: '0 0 20px #f9a8d4, 0 0 30px #f9a8d4',
              y: -10,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, type: 'spring', stiffness: 120 }}
          />
        ))}
      </div>
    </div>
  );
}
