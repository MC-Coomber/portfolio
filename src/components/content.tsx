"use client";
import { allWork } from "@/data/all-work";
import ProjectCard from "./work-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { forwardRef } from "react";
import Image from "next/image";
import josh from "../assets/josh.jpg";

export default forwardRef<HTMLDivElement>(function Content(props, ref) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <>
      <div style={{ height: "80vh" }}></div>
      <motion.section
        className="flex justify-center p-32 select-none"
        style={{ opacity: opacity }}
        ref={ref}
      >
        <div className="grid grid-cols-2 gap-16">
          {allWork.map((work, index) => (
            <ProjectCard key={index} model={work} />
          ))}
        </div>
        {/* // <Image src={josh} alt="josh" /> */}
      </motion.section>
    </>
  );
});
