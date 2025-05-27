'use client';
import { motion } from 'framer-motion';

export default function ColorSVG({ hovered }: { hovered: boolean }) {
  return (
    <motion.svg width="90" height="90" viewBox="0 0 90 90" fill="none">
      <motion.rect x="20" y="55" width={hovered ? 28 : 20} height={hovered ? 28 : 20} fill="#a34a00" transition={{ duration: 0.3 }} />
      <motion.rect x="50" y="20" width={hovered ? 28 : 20} height={hovered ? 28 : 20} fill="#a34a00" transition={{ duration: 0.3 }} />
      <motion.circle cx="30" cy="65" r={hovered ? 14 : 10} fill="#ff9800" transition={{ duration: 0.3 }} />
      <motion.circle cx="60" cy="30" r={hovered ? 14 : 10} fill="#ff9800" transition={{ duration: 0.3 }} />
    </motion.svg>
  );
}