'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { cn } from '@/lib/utils'
import { SLIDES } from '@/lib/slidesData'

interface SlideNavProps {
    total: number
    current: number
    section: string
    onPrev: () => void
    onNext: () => void
    onDot: (index: number) => void
}

export default function SlideNav({
    total, current, section, onPrev, onNext, onDot,
}: SlideNavProps) {
    // Progress 0–100 across all slides
    const progress = (current / (total - 1)) * 100

    // Auto-hide keyboard hint after 4s
    const [showHint, setShowHint] = useState(true)
    useEffect(() => {
        const t = setTimeout(() => setShowHint(false), 4000)
        return () => clearTimeout(t)
    }, [])

    const currentSlide = SLIDES[current]

    return (
        <>
            {/* ══════════════════════════════════════════
          GOLD PROGRESS BAR — top edge
      ══════════════════════════════════════════ */}
            <div
                className="fixed top-0 left-0 right-0 h-[2px] z-chrome pointer-events-none"
                style={{ background: 'rgba(240,237,230,0.08)' }}
            >
                <motion.div
                    className="h-full"
                    style={{
                        background: 'linear-gradient(to right, #C9A84C, #E5C97A)',
                        boxShadow: '0 0 10px rgba(201,168,76,0.55)',
                    }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
                />
            </div>

            {/* ══════════════════════════════════════════
          TOP LEFT — MoA wordmark + section label
      ══════════════════════════════════════════ */}
            <div className="fixed top-0 left-0 z-chrome pointer-events-none px-8 pt-5 flex flex-col gap-1">

                {/* Logo — always visible */}
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mall_of_america_logo2.png"
                    alt="Mall of America"
                    width={100}
                    height={30}
                    className="w-auto object-contain opacity-60"
                    style={{ height: '40px' }}
                />

                {/* Section — animates on change */}
                <AnimatePresence mode="wait">
                    <motion.span
                        key={section}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="font-mono uppercase text-moa-gold"
                        style={{ fontSize: '9px', letterSpacing: '2.5px' }}
                    >
                        {section}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* ══════════════════════════════════════════
          TOP RIGHT — Slide counter
      ══════════════════════════════════════════ */}
            <div className="fixed top-5 right-8 z-chrome pointer-events-none flex items-baseline gap-1">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={current}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.25 }}
                        className="font-mono text-moa-ivory-60"
                        style={{ fontSize: '11px', letterSpacing: '2px' }}
                    >
                        {String(current + 1).padStart(2, '0')}
                    </motion.span>
                </AnimatePresence>
                <span
                    className="font-mono text-moa-ivory-35"
                    style={{ fontSize: '11px', letterSpacing: '2px' }}
                >
                    &nbsp;/&nbsp;{String(total).padStart(2, '0')}
                </span>
            </div>

            {/* ══════════════════════════════════════════
          LEFT ARROW
      ══════════════════════════════════════════ */}
            <AnimatePresence>
                {current > 0 && (
                    <motion.button
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.25 }}
                        onClick={onPrev}
                        aria-label="Previous slide"
                        className={cn(
                            'pointer-events-auto fixed left-2 top-[54%] -translate-y-1/2 z-chrome',
                            'w-12 h-12 flex items-center justify-center p-1',
                            'rounded-full border border-moa-gold-border',
                            'bg-moa-void/50 backdrop-blur-md',
                            'text-moa-ivory-35 hover:text-moa-gold hover:border-moa-gold',
                            'transition-colors duration-200 group'
                        )}
                    >
                        <HiChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-150" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* ══════════════════════════════════════════
          RIGHT ARROW
      ══════════════════════════════════════════ */}
            <AnimatePresence>
                {current < total - 1 && (
                    <motion.button
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.25 }}
                        onClick={onNext}
                        aria-label="Next slide"
                        className={cn(
                            'pointer-events-auto fixed right-2 top-[54%] -translate-y-1/2 z-chrome',
                            'w-12 h-12 flex items-center justify-center p-1',
                            'rounded-full border border-moa-gold-border',
                            'bg-moa-void/50 backdrop-blur-md',
                            'text-moa-ivory-35 hover:text-moa-gold hover:border-moa-gold',
                            'transition-colors duration-200 group'
                        )}
                    >
                        <HiChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-150" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* ══════════════════════════════════════════
          BOTTOM — Dots + slide headline strip
      ══════════════════════════════════════════ */}
            <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-chrome px-8 pb-6
                      flex items-end justify-between">

                {/* Bottom-left: current slide headline */}
                <div className="pointer-events-none max-w-[40%] hidden md:block">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={current}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 0.45, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="font-display font-light text-moa-ivory truncate"
                            style={{ fontSize: '13px', letterSpacing: '0.2px' }}
                        >
                            {currentSlide?.headline?.replace(/\n/g, ' ')}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Bottom-center: nav dots */}
                <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 bottom-6
                        flex items-center gap-[9px]">
                    {Array.from({ length: total }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => onDot(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className="relative flex items-center justify-center"
                            style={{ width: i === current ? 28 : 6, height: 6 }}
                        >
                            <motion.span
                                layout
                                animate={{
                                    width: i === current ? 28 : 6,
                                    opacity: i === current ? 1 : 0.3,
                                    background: i === current ? '#C9A84C' : 'rgba(240,237,230,0.4)',
                                }}
                                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                className="block h-[5px] rounded-full"
                                style={{
                                    boxShadow: i === current ? '0 0 6px rgba(201,168,76,0.5)' : 'none',
                                }}
                            />
                        </button>
                    ))}
                </div>

                {/* Bottom-right: keyboard hint — auto-hides after 4s */}
                <AnimatePresence>
                    {showHint && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="pointer-events-none hidden md:flex items-center gap-2"
                        >
                            <span
                                className="font-mono text-moa-ivory-35 border border-moa-ivory-15 px-2 py-1"
                                style={{ fontSize: '9px', letterSpacing: '1px' }}
                            >
                                ←
                            </span>
                            <span
                                className="font-mono text-moa-ivory-35 uppercase tracking-widest"
                                style={{ fontSize: '8px' }}
                            >
                                Navigate
                            </span>
                            <span
                                className="font-mono text-moa-ivory-35 border border-moa-ivory-15 px-2 py-1"
                                style={{ fontSize: '9px', letterSpacing: '1px' }}
                            >
                                →
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}