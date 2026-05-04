"use client";

import { useEffect, useState } from "react";

function useTypewriter(text: string, speed = 30, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => {
      setIsStarted(true); // ✅ typing has begun
      let i = 0;

      const id = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(id);
          setIsComplete(true); // ✅ mark complete
        }
      }, speed);

      return () => clearInterval(id);
    }, delay);

    return () => clearTimeout(start);
  }, [text, speed, delay]);

  return { displayed, isStarted, isComplete };
}
  
export default useTypewriter;
