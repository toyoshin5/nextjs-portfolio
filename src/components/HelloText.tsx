// Source Widget: _HelloText (home_page.dart)

'use client';

import { motion } from 'framer-motion';

interface HelloTextProps {
  headerHeight: number;
  text: string;
}

export const HelloText = ({ headerHeight, text }: HelloTextProps) => {
  const characters = text.split('');

  return (
    <div
      className="pt-8 flex items-center justify-center"
      style={{ height: headerHeight }}
    >
      <div className="text-center text-white text-2xl leading-relaxed font-mono">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.13, duration: 0.05 }}
          >
            {char === '\n' ? <br /> : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
