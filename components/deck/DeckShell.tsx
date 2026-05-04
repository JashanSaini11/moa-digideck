"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { useDeckStore } from "@/lib/store";
import SlideNav from "@/components/deck/SlideNav";

// Slides
import Slide01Intro from "@/components/slides/Slide01Intro";
import Slide02Overview from "@/components/slides/Slide02Overview";
import Slide03Experience from "@/components/slides/Slide03Experience";
import Slide04Stats from "@/components/slides/Slide04Stats";
import Slide05Dining from "@/components/slides/Slide05Dining";
import Slide06Attractions from "@/components/slides/Slide06Attractions";
import Slide07Events from "@/components/slides/Slide07Events";
import Slide08Monetization from "@/components/slides/Slide08Monetization";
import { slidesData } from "@/lib/slidesData";

export default function DeckShell() {
  const swiperRef = useRef<SwiperType | null>(null);

  const { currentSlide, setSlide, nextSlide, introComplete, setIntroComplete } =
    useDeckStore();

  // ─────────────────────────────────────────────
  // Slide Registry
  // ─────────────────────────────────────────────
  const slides = [
    Slide01Intro,
    Slide02Overview,
    Slide03Experience,
    Slide04Stats,
    Slide05Dining,
    Slide06Attractions,
    Slide07Events,
    Slide08Monetization,
  ];

  // ─────────────────────────────────────────────
  // Safe navigation (prevents overflow)
  // ─────────────────────────────────────────────
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      nextSlide();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setSlide(currentSlide - 1);
    }
  };

  // ─────────────────────────────────────────────
  // Zustand → Swiper sync
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(currentSlide);
    }
  }, [currentSlide]);

  // ─────────────────────────────────────────────
  // Keyboard navigation (extra control)
  // ─────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide]);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* ─────────────────────────────────────────────
          SWIPER (MAIN ENGINE)
      ───────────────────────────────────────────── */}
      <Swiper
        modules={[Keyboard]}
        slidesPerView={1}
        speed={900}
        allowTouchMove={true}
        keyboard={{ enabled: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setSlide(swiper.activeIndex);
          // Auto-complete intro when user swipes away from slide 0
          if (swiper.activeIndex > 0 && !introComplete) {
            setIntroComplete();
          }
        }}
        className="w-full h-full"
      >
        {slides.map((Slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              onNext={handleNext}
              onGoTo={setSlide}
              slideData={slidesData[index]}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ─────────────────────────────────────────────
          SLIDE NAV CHROME — show after intro or if
          the user swiped past slide 0 directly
      ───────────────────────────────────────────── */}
      {(introComplete || currentSlide > 0) && (
        <SlideNav
          total={slides.length}
          current={currentSlide}
          section={slidesData[currentSlide]?.section ?? ""}
          onPrev={handlePrev}
          onNext={handleNext}
          onDot={setSlide}
        />
      )}
    </div>
  );
}
