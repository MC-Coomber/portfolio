"use client";

import ProjectCard from "./work-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { forwardRef } from "react";
import { Project } from "../../../sanity.types";

export default forwardRef<HTMLDivElement, ContentProps>(function Content(props, ref) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <>
      <div style={{ height: "100vh" }}></div>
      <motion.section
        className="flex justify-center p-16 md:p-18 lg:p-20 select-none"
        style={{ opacity: opacity }}
        ref={ref}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
          {props.projects.map((work, index) => (
            <ProjectCard key={index} project={work} />
          ))}
        </div>
      </motion.section>
    </>
  );
});

interface ContentProps {
  projects: Project[]
}
