'use client';

import { motion } from 'framer-motion';
import Jessica from '@/characters/Jessica';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } } };
const item = { hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' } } };

const recipes = [
  { name: 'Honey Garlic Salmon', color: '#FFB3B3', stars: 5 },
  { name: 'Thai Basil Chicken', color: '#B3FFB3', stars: 4 },
  { name: 'Mango Sticky Rice', color: '#FFE0B3', stars: 5 },
  { name: 'Korean BBQ Tacos', color: '#B3D9FF', stars: 4 },
  { name: 'Lemon Herb Pasta', color: '#E0B3FF', stars: 5 },
  { name: 'Coconut Curry Soup', color: '#FFB3E6', stars: 4 },
];

export default function S12_BeautifulWebsite({ isPresenting }: { isPresenting: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
    >
      <motion.h2
        className="font-retro text-neon-pink text-xl md:text-2xl mb-2 text-neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The Beautiful Website
      </motion.h2>
      <div className="flex items-center gap-2 mb-6">
        <motion.span
          className="font-body text-xl text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Everything is working.
        </motion.span>
        <motion.span
          className="font-body text-xl text-neon-yellow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          For now...
        </motion.span>
      </div>

      <div className="relative">
        {/* Website mockup */}
        <motion.div
          className="bg-white rounded-xl overflow-hidden shadow-2xl w-[700px] max-w-[85vw]"
          initial={{ filter: 'grayscale(1)', opacity: 0.5 }}
          animate={{ filter: 'grayscale(0)', opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Header */}
          <motion.div
            className="bg-gradient-to-r from-pink-400 to-pink-600 px-6 py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="font-retro text-white text-xs">damndelicious.net</div>
            <div className="flex gap-4 mt-1">
              {['Recipes', 'About', 'Search', 'Contact'].map((item) => (
                <span key={item} className="text-white/80 text-xs font-body">{item}</span>
              ))}
            </div>
          </motion.div>

          {/* Recipe cards */}
          <motion.div
            className="grid grid-cols-3 gap-3 p-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {recipes.map((recipe) => (
              <motion.div
                key={recipe.name}
                variants={item}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-20" style={{ backgroundColor: recipe.color }} />
                <div className="p-2 bg-white">
                  <div className="font-body text-sm text-gray-800 font-bold">{recipe.name}</div>
                  <div className="text-yellow-500 text-xs">
                    {'★'.repeat(recipe.stars)}{'☆'.repeat(5 - recipe.stars)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Jessica looking proud */}
        <motion.div
          className="absolute -right-16 -bottom-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, type: 'spring' }}
        >
          <Jessica className="w-24 h-24" expression="happy" animated />
        </motion.div>

        {/* Sparkle sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="absolute top-0 bottom-0 w-20"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
            animate={{ left: ['-20%', '120%'] }}
            transition={{ delay: 2, duration: 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
