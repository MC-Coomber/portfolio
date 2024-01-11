"use client";

import { allWork } from "@/data/all-work";
import WorkCard from "./work-card";
import Bio from "./bio";
import { Drawer } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import ProjectModel from "@/data/work";
import { SelectedWorkContext } from "@/context/selected-work-context";
import { DrawerContent } from "./drawer";

export default function Content() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<ProjectModel | undefined>(
    undefined
  );

  useEffect(() => {
    console.log(selectedWork);
    if (selectedWork != undefined) {
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false);
    }
  }, [selectedWork]);

  return (
    <main className="flex lg:w-1/2 lg:pt-24 py-4 flex-col select-none">
      <Bio />
      <SelectedWorkContext.Provider value={{ selectedWork, setSelectedWork }}>
        {allWork.map((work) => (
          <WorkCard key={work.name} model={work} />
        ))}
        <Drawer
          open={drawerOpen}
          PaperProps={{
            className: "lg:w-1/2 sm:w-full",
          }}
          anchor="right"
          hideBackdrop={true}
        >
          <DrawerContent />
        </Drawer>
      </SelectedWorkContext.Provider>
    </main>
  );
}
