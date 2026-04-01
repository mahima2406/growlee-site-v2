import { motion } from 'framer-motion'

export function AnimatedBeam({ className = '' }) {
  return (
    <svg className={`w-full ${className}`} viewBox="0 0 800 100" fill="none">
      <motion.path
        d="M0 50 Q200 10 400 50 Q600 90 800 50"
        stroke="url(#beam-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <defs>
        <linearGradient id="beam-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8582A" stopOpacity="0" />
          <stop offset="50%" stopColor="#E8582A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E8582A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function ConnectorLine({ from, to, className = '' }) {
  return (
    <motion.div
      className={`absolute left-1/2 -translate-x-1/2 ${className}`}
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: 'top', width: 2, background: 'linear-gradient(to bottom, #E8582A, transparent)' }}
    />
  )
}
