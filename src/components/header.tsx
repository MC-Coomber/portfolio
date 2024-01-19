"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function FirstView() {
  const { scrollYProgress } = useScroll();

  const increased = useTransform(scrollYProgress, (val) => val * 4);
  const scale = useTransform(increased, [0, 1], [1, 0.5]);
  const top = useTransform(
    useTransform(increased, [0, 1], [40, 0]),
    (val) => `${val}%`
  );

  return (
    <>
      <motion.div
        className="sticky top-0 bottom-0 z-10 bg-white"
        style={{ top: top }}
      >
        <motion.div
          className="flex flex-col items-center justify-center sticky text-center gap-4"
          style={{ scale: scale }}
        >
          <h1 className="text-6xl font-bold">Mike Coomber</h1>
          <h2 className="text-4xl">Front End Developer</h2>
        </motion.div>
      </motion.div>
    </>
  );
}
