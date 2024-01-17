"use client";

import { allWork } from "@/data/all-work";
import ProjectCard from "./work-card";
import Bio from "./bio";
import { Drawer, backdropClasses } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";
import ProjectModel from "@/data/project";
import { SelectedWorkContext } from "@/context/selected-work-context";
import { DrawerContent } from "./drawer";
import { ImageContext } from "@/context/image-context";

export default function Content() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { setCurrentImage } = useContext(ImageContext);
  const [selectedWork, setSelectedWork] = useState<ProjectModel | undefined>(
    undefined
  );

  useEffect(() => {
    if (selectedWork != undefined) {
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false);
    }
  }, [selectedWork]);

  return (
    <main className="flex lg:w-1/2 lg:pt-24 py-4 flex-col select-none">
      <SelectedWorkContext.Provider value={{ selectedWork, setSelectedWork }}>
        <div className="grid grid-cols-2 gap-16">
          {allWork.map((work) => (
            <ProjectCard key={work.name} model={work} />
          ))}
        </div>
        <Drawer
          open={drawerOpen}
          PaperProps={{
            className: "w-full lg:w-1/2",
          }}
          anchor="right"
          slotProps={{
            backdrop: {
              style: { background: "transparent" },
            },
          }}
          onClose={() => {
            setSelectedWork(undefined);
            setCurrentImage(undefined);
          }}
        >
          <DrawerContent />
        </Drawer>
      </SelectedWorkContext.Provider>
    </main>
  );
}
