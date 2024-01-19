"use client";

import { IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { motion, useScroll, useTransform } from "framer-motion";
import { MouseEventHandler } from "react";

export function Chevron({ onClick }: { onClick: MouseEventHandler }) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <motion.div
      className="sticky bottom-0 left-0 right-0 flex justify-center"
      style={{ opacity: opacity }}
    >
      <IconButton size="large" onClick={onClick}>
        <ExpandMore fontSize="large" />
      </IconButton>
    </motion.div>
  );
}
