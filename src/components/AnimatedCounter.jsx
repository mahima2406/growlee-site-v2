import { useRef, useEffect, useState } from 'react'
import { useInView, motion } from 'framer-motion'

export function AnimatedCounter({ value, suffix = '', prefix = '', className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)
  const numericValue = parseFloat(value.toString().replace(/[^\d.]/g, ''))

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1200
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = eased * numericValue
      setDisplay(Number.isInteger(numericValue) ? Math.round(start) : parseFloat(start.toFixed(1)))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, numericValue])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {prefix}{display}{suffix}
    </motion.span>
  )
}
