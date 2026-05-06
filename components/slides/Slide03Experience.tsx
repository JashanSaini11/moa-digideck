"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { SlideData } from "@/lib/slidesData";

interface Props {
  slideData: SlideData;
  onNext: () => void;
  onGoTo: (i: number) => void;
}

const items = [
  {
    title: "Retail",
    desc: "World-class brands and flagship stores.",
    img: "https://media.gettyimages.com/id/523418492/photo/ladies-shopping-at-macys-mall-of-america-bloomington-minnesota.jpg?s=612x612&w=0&k=20&c=jVgEUhDhKRSUzjhxB9zpxiyzlMoZbOvWJD1iAFrKd-w=",
    span: false,
  },
  {
    title: "Dining",
    desc: "From quick bites to premium restaurants.",
    img: "https://mallofamerica.com/sites/default/files/2023-11/fire-lake-dining-guide-hero-websize.jpg",
    span: false,
  },
  {
    title: "Attractions",
    desc: "Theme parks, events, and immersive fun.",
    img: "https://media.gettyimages.com/id/2237568158/photo/bloomington-minnesota-mall-of-america-people-enjoying-nickelodeon-universe-which-consists-of.jpg?s=612x612&w=0&k=20&c=vMjwIvBkyFybqrsLxlcdMpPyDVLisqt5GkRGdI-D2Q0=",
    span: true, // spans both columns
  },
];

export default function Slide03Experience({ onNext }: Props) {
  return (
    <div className="w-full h-screen bg-black text-white flex items-center px-6 md:px-16 overflow-hidden">

      {/* LEFT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center pl-8 md:pl-16 shrink-0">

        <motion.p
          className="text-xs uppercase tracking-[3px] text-gray-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Experience
        </motion.p>

        <motion.h2
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Everything in <br /> One Place
        </motion.h2>

        <motion.p
          className="max-w-md leading-relaxed text-sm md:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <span className="text-gray-400">From </span>
          <span className="text-[#f0c040] font-medium">shopping and dining</span>
          <span className="text-gray-400"> to </span>
          <span className="text-[#f0c040] font-medium">entertainment and attractions</span>
          <span className="text-gray-400">, Mall of America delivers a complete destination experience.</span>
        </motion.p>

        <motion.button
          onClick={onNext}
          className="mt-10 w-fit px-7 py-3 border border-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Explore More
        </motion.button>
      </div>

      {/* RIGHT GRID */}
      <div className="hidden md:grid w-2/3 grid-cols-2 gap-4 self-center py-8">

        {/* Top row: first two cards */}
        {items.slice(0, 2).map((item, i) => (
          <motion.div
            key={i}
            className="relative group overflow-hidden rounded-2xl h-52"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
            {/* Text */}
            <div className="absolute bottom-4 left-4">
              <h3 className="text-base font-semibold tracking-wide">{item.title}</h3>
              <p className="text-xs text-gray-300 mt-0.5">{item.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* Bottom row: Attractions spans full width */}
        <motion.div
          className="relative group overflow-hidden rounded-2xl col-span-2 h-48"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Image
            src={items[2].img}
            alt={items[2].title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-base font-semibold tracking-wide">{items[2].title}</h3>
            <p className="text-xs text-gray-300 mt-0.5">{items[2].desc}</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}