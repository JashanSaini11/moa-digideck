'use client'

import { motion } from 'framer-motion'
import type { SlideData } from '@/lib/slidesData'

interface Props {
  slideData: SlideData
  onNext: () => void
  onGoTo: (i: number) => void
}

export default function Slide06Attractions({ slideData, onNext }: Props) {
  const videoSrc = encodeURI(
    '/Fun is out there! __ Nickelodeon Universe - Mall of America®.mp4'
  )

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="mb-4 text-xs uppercase tracking-[4px] text-gray-300"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {slideData.section}
        </motion.p>

        <motion.h1
          className="max-w-3xl text-4xl md:text-6xl font-semibold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {slideData.headline}
        </motion.h1>

        {slideData.body && (
          <motion.p
            className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {slideData.body}
          </motion.p>
        )}
      </div>
    </div>
  )
}
