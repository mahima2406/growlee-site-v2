import { motion } from 'framer-motion'

export function GlowOrb({ color = '#E8582A', size = 300, top, left, right, bottom, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size, top, left, right, bottom,
        background: `radial-gradient(circle, ${color}15, transparent 70%)`,
        filter: 'blur(60px)',
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}
