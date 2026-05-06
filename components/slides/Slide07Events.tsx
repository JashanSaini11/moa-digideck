"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { EVENT_TYPES, type EventType } from "@/lib/slidesData";
import type { SlideData } from "@/lib/slidesData";
import { slideContentContainer, staggerItem } from "@/lib/animations";

interface Props {
  slideData: SlideData;
  onNext: () => void;
  onGoTo: (i: number) => void;
}

export default function Slide07Events({ onNext }: Props) {
  const [active, setActive] = useState<EventType>(EVENT_TYPES[0]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-moa-void flex flex-col">
      {/* ═══════════════════════════════════════════
          BACKGROUND — crossfades on category change
      ═══════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={active.id}
            src={active.image}
            alt={active.label}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.35) saturate(0.65)" }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: [
            "linear-gradient(to top, rgba(6,7,10,0.75) 0%, rgba(6,7,10,0.2) 45%, transparent 100%)",
            "linear-gradient(to right, rgba(6,7,10,0.45) 0%, transparent 60%)",
          ].join(","),
        }}
      />
      <div className="grain-overlay" />

      {/* Gold accent line */}
      <motion.div
        className="absolute left-[80px] bottom-0 w-px z-[10] max-md:left-8"
        style={{ background: "linear-gradient(to top, #C9A84C, transparent)" }}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 96, opacity: 0.5 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      />

      {/* ═══════════════════════════════════════════
          TOP SECTION — headline + stat
      ═══════════════════════════════════════════ */}
      <motion.div
        variants={slideContentContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-start justify-between
                   px-[80px] pt-[6rem] pb-6 flex-shrink-0 max-md:px-8"
      >
        {/* Left: headline */}
        <div>
          <motion.h2
            variants={staggerItem}
            className="font-display font-light text-moa-ivory"
            style={{
              fontSize: "clamp(32px, 3.8vw, 58px)",
              letterSpacing: "-1px",
              lineHeight: 1.0,
            }}
          >
            365 chances to turn every
            <br />
            moment into an unforgettable experience.
          </motion.h2>
        </div>

        {/* Right: ghost stat */}
        <motion.div
          variants={staggerItem}
          className="hidden md:flex flex-col items-end flex-shrink-0"
        >
          <span
            className="font-display font-bold"
            style={{
              fontSize: "clamp(48px, 5.5vw, 80px)",
              color: "rgba(201,168,76,0.18)",
              lineHeight: 1,
              letterSpacing: "-3px",
              textShadow: "0 0 8px rgba(201,168,76,0.18)",
            }}
          >
            32M
          </span>
          <span
            className="font-mono uppercase text-moa-ivory-35"
            style={{ fontSize: "9px", letterSpacing: "2px" }}
          >
            Built-in audience
          </span>
        </motion.div>
      </motion.div>

      {/* Gold rule */}
      <motion.div
        className="flex-shrink-0 mx-[80px] max-md:mx-8"
        style={{ height: "0.5px", background: "rgba(201,168,76,0.18)" }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* ═══════════════════════════════════════════
           tabs
      ═══════════════════════════════════════════ */}
      <div className="relative z-10 flex-shrink-0 px-[80px] py-6 max-md:px-8">
        <div className="flex items-center gap-2 flex-wrap">
          {EVENT_TYPES.map((evt) => (
            <button
              key={evt.id}
              onClick={() => setActive(evt)}
              className="relative px-5 py-3 transition-colors duration-200 cursor-pointer"
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              {/* Active pill */}
              {active.id === evt.id && (
                <motion.span
                  layoutId="event-tab-pill"
                  className="absolute inset-0 bg-moa-gold"
                  style={{ borderRadius: "1px" }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                />
              )}
              <span
                className="relative z-10 uppercase transition-colors duration-200 font-mono font-semibold"
                style={{
                  color:
                    active.id === evt.id ? "#06070A" : "rgba(240,237,230,0.38)",
                }}
              >
                {evt.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BOTTOM SECTION — active event detail
      ═══════════════════════════════════════════ */}
      <div
        className="relative z-10 flex-1 min-h-0 px-[80px] pb-[120px]
                      flex flex-col justify-end max-md:px-8 max-md:pb-12"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end justify-between gap-5 flex-wrap"
          >
            {/* Left: event info */}
            <div className="flex-1 min-w-0">
              {/* Capacity badge */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-1.5 h-1.5 rounded-full bg-moa-gold"
                  style={{ boxShadow: "0 0 6px rgba(201,168,76,0.6)" }}
                />
                <span
                  className="font-mono uppercase text-moa-gold"
                  style={{ fontSize: "12px", letterSpacing: "2px" }}
                >
                  {active.capacity}
                </span>
              </div>

              {/* Event name */}
              <h3
                className="font-display font-light text-moa-ivory mb-3"
                style={{
                  fontSize: "clamp(32px, 3.5vw, 52px)",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.05,
                }}
              >
                {active.label}
              </h3>

              {/* Gold divider */}
              <div className="w-10 h-px bg-moa-gold mb-4 opacity-60" />

              {/* Description */}
              <p
                className="font-body font-light text-moa-ivory-60 max-w-md"
                style={{
                  fontSize: "clamp(15px, 1.3vw, 18px)",
                  lineHeight: 1.65,
                }}
              >
                {active.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
