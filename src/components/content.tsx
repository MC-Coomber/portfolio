"use client";

import { allWork } from "@/data/all-work";
import WorkCard from "./work-card";
import Bio from "./bio";

export default function Content() {
  return (
    <main className="flex lg:w-1/2 lg:pt-24 py-4 flex-col select-none">
      <Bio />
      {allWork.map((work) => (
        <WorkCard key={work.company} model={work} />
      ))}
    </main>
  );
}
