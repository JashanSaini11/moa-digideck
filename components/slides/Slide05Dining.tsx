'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import { AUDIENCE_CARDS, type AudienceCard } from '@/lib/slidesData'
import type { SlideData } from '@/lib/slidesData'
import { slideContentContainer, staggerItem } from '@/lib/animations'

interface Props {
  slideData: SlideData
  onNext:   () => void
  onGoTo:   (i: number) => void
}

// ── Single card ─────────────────────────────────────────────
function OpportunityCard({
  card,
  index,
}: {
  card:  AudienceCard
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={staggerItem}
      className="relative flex-1 overflow-hidden cursor-pointer group min-h-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.location.href = card.href}
    >
      {/* ── Background image ── */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        <img
          src={card.image}
          alt={card.label}
          className="w-full h-full object-cover"
          style={{
            filter: hovered
              ? 'brightness(0.45) saturate(0.7)'
              : 'brightness(0.28) saturate(0.5)',
            transition: 'filter 0.6s ease',
          }}
        />
      </motion.div>

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: hovered
            ? 'linear-gradient(to top, rgba(6,7,10,0.92) 0%, rgba(6,7,10,0.3) 60%, transparent 100%)'
            : 'linear-gradient(to top, rgba(6,7,10,0.85) 0%, rgba(6,7,10,0.5) 100%)',
          transition: 'background 0.5s ease',
        }}
      />

      {/* ── Gold left border — slides in on hover ── */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px] z-[3]"
        style={{ background: `linear-gradient(to bottom, transparent, ${card.color}, transparent)` }}
        animate={{ opacity: hovered ? 1 : 0, scaleY: hovered ? 1 : 0.3 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />  

      {/* ── Tag badge — top right ── */}
      <div className="absolute top-5 right-5 z-[5]">
        <motion.span
          animate={{ opacity: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
          className="font-mono uppercase"
          style={{
            fontSize: '8px',
            letterSpacing: '2px',
            color: card.color,
            border: `0.5px solid ${card.color}55`,
            background: 'rgba(6,7,10,0.6)',
            padding: '3px 8px',
            backdropFilter: 'blur(4px)',
          }}
        >
          {card.tag}
        </motion.span>
      </div>

      {/* ── Default state — label + icon ── */}
      <div className="absolute inset-0 z-[5] flex flex-col justify-end p-6">

        {/* Icon */}
        <motion.span
          animate={{
            opacity: hovered ? 0 : 1,
            y:       hovered ? -8 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="block mb-3 text-moa-gold-border"
          style={{ fontSize: '20px' }}
        >
          {card.icon}
        </motion.span>

        {/* Default label */}
        <motion.p
          animate={{
            opacity: hovered ? 0 : 1,
            y:       hovered ? -10 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="font-display text-moa-ivory font-light"
          style={{
            fontSize: 'clamp(18px, 1.6vw, 24px)',
            letterSpacing: '-0.3px',
            lineHeight: 1.15,
          }}
        >
          {card.label}
        </motion.p>

        {/* ── Hover state — headline + body + CTA ── */}
        <motion.div
          animate={{
            opacity: hovered ? 1 : 0,
            y:       hovered ? 0 : 16,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 p-6"
        >
          {/* Headline */}
          <p
            className="font-display text-moa-ivory font-light mb-2"
            style={{
              fontSize: 'clamp(20px, 1.8vw, 28px)',
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              whiteSpace: 'pre-line',
            }}
          >
            {card.headline}
          </p>

          {/* Gold divider */}
          <div
            className="mb-3"
            style={{
              width: 32,
              height: 1,
              background: card.color,
            }}
          />

          {/* Body */}
          <p
            className="text-moa-ivory-60 mb-5 font-body font-light leading-snug"
            style={{ fontSize: 'clamp(11px, 0.85vw, 13px)' }}
          >
            {card.body}
          </p>

          {/* CTA */}
          <button
            className="inline-flex items-center gap-2 font-mono uppercase font-medium
                       transition-all duration-200 group/cta"
            style={{
              fontSize: '9px',
              letterSpacing: '2px',
              color: card.color,
              border: `0.5px solid ${card.color}55`,
              padding: '8px 14px',
              background: `${card.color}10`,
            }}
          >
            {card.cta}
            <HiArrowRight
              className="w-3 h-3 group-hover/cta:translate-x-1 transition-transform duration-150"
            />
          </button>
        </motion.div>
      </div>

      {/* ── Bottom border line — gold, draws on hover ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] z-[5]"
        style={{ background: card.color, transformOrigin: 'left' }}
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 0.6 : 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.div>
  )
}

// ── Slide 05 ────────────────────────────────────────────────
export default function Slide05Dining({ onNext }: Props) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-moa-void flex flex-col">

      {/* ── Header ────────────────────────────────────────── */}
      <motion.div
        variants={slideContentContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-10 pt-24 pb-4 flex-shrink-0
                   flex items-end justify-between gap-8"
      >
        {/* Left: headline */}
        <div>
          <motion.h2
            variants={staggerItem}
            className="font-display font-light text-moa-ivory"
            style={{
              fontSize: 'clamp(28px, 3vw, 44px)',
              letterSpacing: '-0.8px',
              lineHeight: 1.05,
            }}
          >
            This Platform Was
            <em className="not-italic text-gold-press">Built For You.</em>
          </motion.h2>
        </div>

        {/* Right: sub copy */}
        <motion.p
          variants={staggerItem}
          className="font-body font-light text-moa-ivory-35 max-w-xs text-right
                     hidden md:block"
          style={{ fontSize: '13px', lineHeight: 1.65 }}
        >
          Select the path that matches your goal — or explore all four.
        </motion.p>
      </motion.div>

      {/* ── Gold divider ──────────────────────────────────── */}
      <motion.div
        className="flex-shrink-0 mx-10"
        style={{ height: '0.5px', background: 'rgba(201,168,76,0.2)' }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* ── 4-card grid ───────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex-1 flex flex-row min-h-0 px-12 py-10 md:py-16"
        style={{ gap: '1px' }}
        variants={slideContentContainer}
        initial="hidden"
        animate="visible"
      >
        {AUDIENCE_CARDS.map((card, i) => (
          <OpportunityCard key={card.id} card={card} index={i} />
        ))}
      </motion.div>

    </div>
  )
}