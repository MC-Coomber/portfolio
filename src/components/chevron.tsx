"use client";

import { IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { Variants, motion, useScroll, useTransform } from "framer-motion";
import { MouseEventHandler } from "react";

export function Chevron({ onClick }: { onClick: MouseEventHandler }) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.9, 1],
    [1, 0, 0, 1]
  );

  const rotation = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 1],
    [0, 0, 180, 180]
  );

  const bounce: Variants = {
    initial: {
      y: 0,
    },
    moveUp: {
      y: -4,
    },
  };

  return (
    <motion.div
      className="sticky bottom-0 left-0 right-0 flex justify-center"
      style={{ opacity: opacity, rotate: rotation }}
    >
      <motion.div
        initial="initial"
        animate="moveUp"
        variants={bounce}
        transition={{
          repeat: Infinity,
          duration: 0.5,
          repeatType: "mirror",
        }}
      >
        <IconButton size="large" onClick={onClick}>
          <ExpandMore fontSize="large" />
        </IconButton>
      </motion.div>
    </motion.div>
  );
}
