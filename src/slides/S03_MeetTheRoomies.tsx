'use client';

import { motion } from 'framer-motion';
import House from '@/characters/House';
import Jessica from '@/characters/Jessica';
import Jake from '@/characters/Jake';
import Zane from '@/characters/Zane';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.4, delayChildren: 0.5 } } };
const item = { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { type: 'spring' } } };

export default function S03_MeetTheRoomies({ isPresenting }: { isPresenting: boolean }) {
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
        Meet the Roomies
      </motion.h2>
      <motion.p
        className="font-body text-xl text-white/80 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        For most applications to function, the house needs three bestie roomies.
      </motion.p>

      <div className="relative flex items-center justify-center gap-8">
        {/* House */}
        <House className="w-64 md:w-80" showFloors={true} ipAddress="192.168.1.1" />

        {/* Characters overlaid on house */}
        <motion.div
          className="absolute inset-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Jessica - Top Floor */}
          <motion.div variants={item} className="absolute flex items-center gap-2" style={{ top: '22%', left: '50%', transform: 'translateX(-50%)' }}>
            <Jessica className="w-14 h-14" expression="happy" animated />
            <div className="text-left">
              <div className="font-retro text-jessica text-[8px]">Jessica</div>
              <div className="font-body text-jessica-light text-xs">The UI</div>
            </div>
          </motion.div>

          {/* Jake - Middle Floor */}
          <motion.div variants={item} className="absolute flex items-center gap-2" style={{ top: '46%', left: '50%', transform: 'translateX(-50%)' }}>
            <Jake className="w-14 h-14" expression="happy" animated />
            <div className="text-left">
              <div className="font-retro text-jake text-[8px]">Jake</div>
              <div className="font-body text-jake-light text-xs">The Service Layer</div>
            </div>
          </motion.div>

          {/* Zane - Basement */}
          <motion.div variants={item} className="absolute flex items-center gap-2" style={{ top: '68%', left: '50%', transform: 'translateX(-50%)' }}>
            <Zane className="w-14 h-14" expression="angry" animated />
            <div className="text-left">
              <div className="font-retro text-zane text-[8px]">Zane</div>
              <div className="font-body text-zane-light text-xs">The Database</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
