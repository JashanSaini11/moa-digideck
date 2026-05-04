"use client";

import { motion } from "framer-motion";
import type { SlideData } from "@/lib/slidesData";
import { useCounter } from "@/hooks/useCounter";
import { stats } from "@/lib/StatesData";
import BorderGlow from "../BorderGlow";

interface Props {
  slideData: SlideData;
  onNext: () => void;
  onGoTo: (i: number) => void;
}

// ─── Each stat gets its own component so useCounter is called
// at the top level of a React component (not inside .map)
interface StatItemProps {
  item: (typeof stats)[number];
  index: number;
}

function StatItem({ item, index }: StatItemProps) {
  const count = useCounter(item.value, 1200 + index * 200, true);

  return (
    <motion.div
      className="relative group  mt-4 md:mt-0 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
    >
      <BorderGlow
        edgeSensitivity={40}
        glowColor="180 140 60"
        backgroundColor="#0f0f0f"
        borderRadius={20}
        glowRadius={30}
        glowIntensity={0.6}
        coneSpread={20}
        animated={false}
        colors={["#C9A84C", "#a78bfa", "#38bdf8"]}
      >
        <div className="px-6 py-6 min-h-[120px] flex flex-col justify-center">

          {/* NUMBER */}
          <div className="text-3xl md:text-5xl font-semibold text-[#C9A84C] mb-2">
            {item.prefix ?? ""}
            {count.toFixed(item.value % 1 !== 0 ? 1 : 0)}
            {item.suffix}
          </div>

          {/* LABEL */}
          <div className="text-sm text-gray-400">
            {item.label}
          </div>

          {/* TOOLTIP */}
          <div className="absolute left-4 bottom-full mb-3 w-56 p-3 text-xs text-white bg-black/80 backdrop-blur opacity-0 group-hover:opacity-100 transition rounded-md pointer-events-none">
            {item.desc}
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
}

export default function Slide04Stats() {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] text-white flex flex-col justify-center px-20  md:px-16">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <p className="text-xs uppercase tracking-[3px] text-gray-500 mb-4">
          Scale
        </p>
        <h2 className="text-4xl md:text-6xl font-semibold">
          By the Numbers
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {stats.map((item, i) => (
          <StatItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}