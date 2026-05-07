"use client";

import { useEffect, useRef, useState } from "react";
import useTypewriter from "@/hooks/useTypewriter";
import { motion, AnimatePresence } from "framer-motion";
import { useDeckStore } from "@/lib/store";
import type { SlideData } from "@/lib/slidesData";
import Image from "next/image";

interface Props {
  slideData: SlideData;
  onNext: () => void;
  onGoTo: (i: number) => void;
}

export default function Slide01Intro({ onNext }: Props) {
  const { setIntroComplete } = useDeckStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [skipVisible, setSkipVisible] = useState(false);

  // Typewriter headline
  const { displayed, isStarted, isComplete } = useTypewriter(
    "Where America Gathers.",
    40,
    1200,
  );

  // Skip button delay
  useEffect(() => {
    const t = setTimeout(() => setSkipVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  // CTA / Skip handler
  const handleEnter = () => {
    setIntroComplete();
    onNext();
  };

  // Ensure autoplay
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => { });
    }
  }, []);


  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* ── Video Background ───────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(0.45) saturate(0.7)",
            transform: "scale(1.05)",
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Overlay ───────────────────────── */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* ── Logo ───────────────────────── */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 z-[10]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mall_of_america_logo2.png"
          alt="Mall of America"
          width={200}
          height={80}
          className="h-24 w-auto object-contain"
        />
      </motion.div>

      {/* ── Typewriter Headline ───────────────────────── */}
      <div className="absolute inset-0 z-[10] flex items-center justify-center px-6 text-center">
        <motion.h1
          className="text-white font-semibold leading-tight"
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            letterSpacing: "-1px",
          }}
          animate={{
            opacity: isComplete ? 1 : 0.9,
            scale: isComplete ? 1 : 0.98,
          }}
          transition={{ duration: 0.6 }}
        >
          {displayed}
          {isStarted && !isComplete && (
            <span className="inline-block w-[2px] h-[1em] bg-white ml-2 animate-pulse" />
          )}
        </motion.h1>
      </div>

      {/* ── Skip Button ───────────────────────── */}
      <AnimatePresence>
        {skipVisible && (
          <motion.button
            onClick={handleEnter}
            className="fixed bottom-8 right-8 z-[999]
                       font-mono text-[12px] uppercase tracking-[2px]
                       border border-white/40 px-6 py-3 text-white backdrop-blur-sm bg-black/30
                       hover:bg-white hover:text-black hover:scale-105
                       transition-all duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Skip Intro
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
