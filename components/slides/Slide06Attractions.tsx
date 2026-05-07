"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { slideContentContainer, staggerItem } from "@/lib/animations";
import { useVideoPlayer } from "@/hooks/useVideoplayer";
import { useDeckStore } from "@/lib/store";
import type { SlideData } from "@/lib/slidesData";

interface Props {
  slideData: SlideData;
  onNext: () => void;
  onGoTo: (i: number) => void;
}

const ATTRACTION_CHIPS = [
  "Nickelodeon Universe",
  "SEA LIFE Aquarium",
  "FlyOver America",
  "Crayola Experience",
  "Mirror Maze",
  "Escape Games",
];

export default function Slide06Attractions({ onNext }: Props) {
  const { currentSlide } = useDeckStore();

  // ── Lazy video — only loads & plays when user reaches slide 6 ──
  const videoRef = useVideoPlayer({
    isActive: currentSlide === 5, // slide index 5 = slide 06
    resetOnExit: true, // restart from beginning if user leaves
  });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-moa-void">
      {/* ── Video background (lazy — preload="none" until active) ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.38) saturate(0.7)" }}
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/waterpark.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Cinematic overlays ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse at center, rgba(6,7,10,0.05) 0%, rgba(6,7,10,0.55) 100%)",
            "linear-gradient(to top, rgba(6,7,10,0.96) 0%, rgba(6,7,10,0.15) 55%)",
            "linear-gradient(to right, rgba(6,7,10,0.6) 0%, transparent 65%)",
          ].join(","),
        }}
      />
      <div className="grain-overlay" />

      {/* ── Gold vertical accent line ── */}
      <motion.div
        className="absolute left-[80px] bottom-0 w-px z-[10] max-md:left-8"
        style={{ background: "linear-gradient(to top, #C9A84C, transparent)" }}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 96, opacity: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
      />

      {/* ── Content — bottom left ── */}
      <motion.div
        variants={slideContentContainer}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-[10] flex flex-col justify-end
                   px-[80px] pb-[88px] max-md:px-8 max-md:pb-20"
      >
        {/* Eyebrow */}
        <motion.p variants={staggerItem} className="eyebrow mb-5">
          Attractions &amp; Entertainment
        </motion.p>

        {/* Headline line 1 */}
        <motion.h2
          variants={staggerItem}
          className="font-display font-light text-moa-ivory mb-1"
          style={{
            fontSize: "clamp(38px, 5.2vw, 76px)",
            letterSpacing: "-1.5px",
            lineHeight: 1.0,
          }}
        >
          The World&rsquo;s Most Visited
        </motion.h2>

        {/* Headline line 2 — gold italic */}
        <motion.h2
          variants={staggerItem}
          className="font-display font-light mb-6"
          style={{
            fontSize: "clamp(38px, 5.2vw, 76px)",
            letterSpacing: "-1.5px",
            lineHeight: 1.0,
          }}
        >
          <em className="not-italic text-gold-press">Indoor Theme Park.</em>
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          variants={staggerItem}
          className="w-12 h-px bg-moa-gold mb-6 opacity-70"
        />

        {/* Body */}
        <motion.p
          variants={staggerItem}
          className="font-body font-light text-moa-ivory-60 max-w-[480px] mb-7"
          style={{ fontSize: "clamp(13px, 1.2vw, 15px)", lineHeight: 1.7 }}
        >
          Eight world-class attractions under one roof. Families don&rsquo;t
          visit for an afternoon — they plan entire trips around it.
        </motion.p>

        {/* Attraction chips */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap gap-2 mb-9 max-w-[560px]"
        >
          {ATTRACTION_CHIPS.map((name) => (
            <span
              key={name}
              className="font-mono uppercase text-moa-ivory-35"
              style={{
                fontSize: "9px",
                letterSpacing: "1.5px",
                border: "0.5px solid rgba(201,168,76,0.2)",
                padding: "5px 11px",
                background: "rgba(6,7,10,0.5)",
                backdropFilter: "blur(4px)",
              }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Ghost stat — right side ── */}
      <motion.div
        className="absolute right-[80px] bottom-[88px] z-[5]
                   hidden lg:flex flex-col items-end gap-1"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="font-display font-bold"
          style={{
            fontSize: "clamp(64px, 8vw, 112px)",
            color: "rgba(201,168,76,0.07)",
            lineHeight: 1,
            letterSpacing: "-4px",
          }}
        >
          8+
        </span>
        <span
          className="font-mono uppercase text-moa-ivory-35"
          style={{ fontSize: "9px", letterSpacing: "2.5px" }}
        >
          World-Class Attractions
        </span>
      </motion.div>
    </div>
  );
}
