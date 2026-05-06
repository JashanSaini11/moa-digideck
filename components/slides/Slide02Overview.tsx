"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { SlideData } from "@/lib/slidesData";
import Stack from "@/components/ui/Stack";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/5/59/2018_Mall_of_America_01.jpg",
  "https://www.mallofamerica.com/sites/default/files/2017-10/hours-hero-first_card.jpg",
  "https://www.softplay.com/wp-content/uploads/2024/10/mall-of-america-ohlt.jpg",
  "https://www.tripsavvy.com/thmb/zIleC4FQRfZxJ1nfK3wxrS5vdp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IMG_0307-5c4b6c87c9e77c0001f32112.jpg"
];

interface Props {
  slideData: SlideData;
  onNext: () => void;
}

export default function Slide02Overview({ onNext }: Props) {

  return (
    <div className="w-full h-screen bg-black text-white flex items-center px-6 md:px-16">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center pl-8 md:pl-16">

        <motion.p
          className="text-sm uppercase tracking-[2px] text-gray-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Overview
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-semibold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          More Than <br /> Just a Mall
        </motion.h2>

        <motion.p
          className="text-base md:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-gray-400">Mall of America is not just a </span>
          <span className="text-[#f0c040] font-medium">shopping destination</span>
          <span className="text-gray-400"> &mdash; it&apos;s a fully integrated </span>
          <span className="text-[#f0c040] font-medium">entertainment and lifestyle ecosystem</span>
          <span className="text-gray-400">. From world-class </span>
          <span className="text-[#f0c040] font-medium">retail to immersive attractions</span>
          <span className="text-gray-400">, it brings millions of visitors together every year.</span>
        </motion.p>

        {/* Optional CTA */}
        <motion.button
          onClick={onNext}
          className="mt-8 w-fit px-6 py-3 border border-white/40 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Continue
        </motion.button>
      </div>

      {/* RIGHT VISUAL */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <div style={{ width: 620, height: 620 }}>
          <Stack
            randomRotation={false}
            sensitivity={200}
            sendToBackOnClick={true}
            cards={images.map((src, i) => (
              <div key={i} style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src={src}
                  alt={`Mall of America - card ${i + 1}`}
                  fill
                  sizes="620px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  );
}