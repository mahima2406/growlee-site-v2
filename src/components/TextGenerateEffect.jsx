import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function TextGenerateEffect({ words, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const wordArray = words.split(' ')

  return (
    <motion.p ref={ref} className={className}>
      {wordArray.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
          className="inline-block mr-[0.3em]"
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.p>
  )
}
