'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  style?: React.CSSProperties
}

export default function FadeIn({ children, delay = 0, y = 28, className, style }: Props) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay }}
    >
      {children}
    </motion.div>
  )
}
