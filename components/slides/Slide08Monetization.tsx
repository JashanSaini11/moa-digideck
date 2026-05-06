'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiMapPin, HiClock, HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { slideContentContainer, staggerItem } from '@/lib/animations'
import type { SlideData } from '@/lib/slidesData'

// ── Data ────────────────────────────────────────────────────
const HOURS = [
  { day: 'Monday – Saturday', time: '10:00 a.m. – 9:00 p.m.' },
  { day: 'Sunday',            time: '11:00 a.m. – 7:00 p.m.' },
]

const DIRECTIONS = [
  {
    from: 'From North',
    route: 'I-35 South → I-35W South → I-494 East, exit 24th Avenue S.',
  },
  {
    from: 'From South',
    route: 'I-35 North → I-35W North → I-494 East, exit 24th Avenue S.',
  },
  {
    from: 'From West',
    route: 'I-94 East → I-494 South → Hwy 77 South, exit Killebrew Dr. or 81st St.',
  },
  {
    from: 'From East',
    route: 'I-94 West → I-494 South, exit 24th Avenue S.',
  },
]

const MAPS_URL =
  'https://www.google.com/maps/dir//MOA,+North+Lot,+Lindau+Lane,+Bloomington,+MN/@44.859357,-93.2492513,16.96z/data=!3m1!5s0x87f62f6c391abe2b:0xc67197b91cc6e394!4m9!4m8!1m0!1m5!1m1!1s0x87f62fb2e129a21d:0xa1c9f5814c9df907!2m2!1d-93.2421876!2d44.857715!3e0?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'

const CTAS = [
  { label: 'Schedule a Conversation', icon: '→', primary: true  },
  { label: 'Download Media Kit',      icon: '↓', primary: false },
  { label: 'Leasing Enquiry',         icon: '→', primary: false },
]

// ── Direction row ───────────────────────────────────────────
function DirectionRow({
  from, route, index,
}: { from: string; route: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.08, duration: 0.4, ease: [0.16,1,0.3,1] }}
      className="border-b cursor-pointer group"
      style={{ borderColor: 'rgba(201,168,76,0.12)' }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="flex items-center justify-between py-8 px-1">
        <div className="flex items-center gap-3">
          {/* Gold dot */}
          <div
            className="w-1 h-1 rounded-full bg-moa-gold shrink-0 transition-all duration-300"
            style={{ boxShadow: open ? '0 0 6px rgba(201,168,76,0.6)' : 'none' }}
          />
          <span
            className="font-mono uppercase transition-colors duration-200"
            style={{
              fontSize: '10px',
              letterSpacing: '2px',
              color: open ? '#C9A84C' : 'rgba(240,237,230,0.5)',
            }}
          >
            {from}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-moa-ivory-35 group-hover:text-moa-gold transition-colors duration-200"
          style={{ fontSize: '16px', lineHeight: 1 }}
        >
          +
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
            className="overflow-hidden"
          >
            <p
              className="font-body font-light text-moa-ivory-60 pb-3 px-4"
              style={{ fontSize: '14px', lineHeight: 1.65 }}
            >
              {route}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Main Slide ──────────────────────────────────────────────
export default function Slide08Monetization() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-moa-void flex flex-col">

      {/* Subtle dark texture bg */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.04) 0%, transparent 60%)',
            'radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.03) 0%, transparent 55%)',
          ].join(','),
        }}
      />
      <div className="grain-overlay" />

      {/* ═══════════════════════════════════
          CONTENT — 2 column layout
      ═══════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row
                      px-20 pt-24 pb-12 gap-12 min-h-0
                      max-md:px-8 max-md:pt-16 max-md:overflow-y-auto">

        {/* ── LEFT COLUMN ─────────────────── */}
        <motion.div
          variants={slideContentContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-between min-h-0 pb-4"
        >
          <div className="flex-1 flex flex-col justify-center gap-8">
            {/* Eyebrow */}
            <motion.p variants={staggerItem} className="eyebrow mb-5">
              Get In Touch
            </motion.p>

            {/* Closing headline */}
            <motion.h2
              variants={staggerItem}
              className="font-display font-light text-moa-ivory mb-4"
              style={{
                fontSize: 'clamp(36px, 4.2vw, 62px)',
                letterSpacing: '-1px',
                lineHeight: 1.02,
              }}
            >
              The Largest Stage in<br />
              American Retail Has{' '}
              <em className="not-italic text-gold-press">
                Space&nbsp;For&nbsp;You.
              </em>
            </motion.h2>

            {/* Gold divider */}
            <motion.div
              variants={staggerItem}
              className="w-10 h-px bg-moa-gold mb-5 opacity-60"
            />

            {/* Sub copy */}
            <motion.p
              variants={staggerItem}
              className="font-body font-light text-moa-ivory-60 max-w-md mb-8"
              style={{ fontSize: '16px', lineHeight: 1.8 }}
            >
              Whether you&rsquo;re opening a flagship, launching an activation,
              or hosting an event — the conversation starts here.
            </motion.p>

            {/* CTA stack */}
            <motion.div variants={staggerItem} className="flex flex-col gap-3">
              {CTAS.map((cta) => (
                <motion.button
                  key={cta.label}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className={
                    cta.primary
                      ? 'btn-gold self-start'
                      : 'btn-ghost self-start'
                  }
                >
                  {cta.label}
                  <HiArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Address footer */}
          <motion.div
            variants={staggerItem}
            className="mt-10 pt-8 flex flex-col gap-1"
            style={{ borderTop: '0.5px solid rgba(201,168,76,0.15)' }}
          >
            <p
              className="font-mono uppercase text-moa-ivory-35"
              style={{ fontSize: '9px', letterSpacing: '2px' }}
            >
              60 East Broadway, Bloomington, MN 55425
            </p>
            <p
              className="font-mono uppercase text-moa-ivory-35"
              style={{ fontSize: '9px', letterSpacing: '2px' }}
            >
              mallofamerica.com
            </p>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN ────────────────── */}
        <div className="flex-1 flex flex-col gap-5 min-h-0 overflow-y-auto">

          {/* ── Hours card ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16,1,0.3,1] }}
            className="shrink-0"
            style={{
              border: '0.5px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.03)',
            }}
          >
            {/* Card header */}
            <div
              className="flex items-center gap-3 px-5 py-3"
              style={{ borderBottom: '0.5px solid rgba(201,168,76,0.12)' }}
            >
              <HiClock className="w-4 h-4 text-moa-gold opacity-70" />
              <span
                className="font-mono uppercase text-moa-gold"
                style={{ fontSize: '12px', letterSpacing: '2.5px' }}
              >
                Mall Hours
              </span>
            </div>

            {/* Hour rows */}
            <div className="px-5 py-4 flex flex-col gap-3">
              {HOURS.map((h) => (
                <div key={h.day} className="flex items-center justify-between gap-4">
                  <span
                    className="font-mono text-moa-ivory-35 uppercase"
                    style={{ fontSize: '12px', letterSpacing: '1.5px' }}
                  >
                    {h.day}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        'repeating-linear-gradient(to right, rgba(201,168,76,0.2) 0, rgba(201,168,76,0.2) 3px, transparent 3px, transparent 7px)',
                    }}
                  />
                  <span
                    className="font-mono text-moa-ivory-60 shrink-0"
                    style={{ fontSize: '12px', letterSpacing: '0.5px' }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Directions card ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.16,1,0.3,1] }}
            className="shrink-0"
            style={{
              border: '0.5px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.03)',
            }}
          >
            {/* Card header */}
            <div
              className="flex items-center gap-3 px-5 py-3"
              style={{ borderBottom: '0.5px solid rgba(201,168,76,0.12)' }}
            >
              <HiMapPin className="w-4 h-4 text-moa-gold opacity-70" />
              <span
                className="font-mono uppercase text-moa-gold"
                style={{ fontSize: '12px', letterSpacing: '2.5px' }}
              >
                Directions
              </span>
            </div>

            {/* Accordion rows */}
            <div className="px-5 py-2">
              {DIRECTIONS.map((d, i) => (
                <DirectionRow
                  key={d.from}
                  from={d.from}
                  route={d.route}
                  index={i}
                />
              ))}
            </div>

            {/* Google Maps CTA */}
            <div className="px-5 pb-5 pt-3">
              <motion.a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full justify-center
                           font-mono uppercase transition-all duration-300 group"
                style={{
                  fontSize: '12px ',
                  letterSpacing: '2px',
                  color: '#C9A84C',
                  border: '0.5px solid rgba(201,168,76,0.35)',
                  background: 'rgba(201,168,76,0.06)',
                  padding: '12px 20px',
                }}
                whileHover={{
                  background: 'rgba(201,168,76,0.12)',
                  borderColor: 'rgba(201,168,76,0.6)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <HiMapPin className="w-3.5 h-3.5" />
                Get Directions
                <HiArrowTopRightOnSquare className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}