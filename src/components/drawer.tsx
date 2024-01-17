import { SelectedWorkContext } from "@/context/selected-work-context";
import ProjectModel from "@/data/project";
import { AppBar, Icon, IconButton } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";
import Image from "next/image";
import Page from "@/data/page";
import Flutter from "../assets/flutter.png";
import React from "../assets/react.png";

export function DrawerContent() {
  const { selectedWork, setSelectedWork } = useContext(SelectedWorkContext);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const workModel = useRef(selectedWork).current;

  return (
    <div className="h-full bg-primary-blue p-4 flex flex-col lg:py-24 gap-8">
      <div className="flex items-start text-right justify-between">
        <Image src={Flutter} width={100} height={50} alt="flutter" />
        <div className="flex flex-col px-2 gap-2">
          <h1 className="text-3xl font-semibold">{workModel?.name}</h1>
          <h2 className="text-2xl">{workModel?.company}</h2>
        </div>
      </div>
      <div className="flex flex-1 items-center">
        <IconButton
          onClick={() => setCurrentPageIndex(Math.max(0, currentPageIndex - 1))}
        >
          <ArrowLeft />
        </IconButton>
        <PageView page={workModel!.pages[currentPageIndex]} />
        <IconButton
          onClick={() =>
            setCurrentPageIndex(
              Math.min(workModel!.pages.length - 1, currentPageIndex + 1)
            )
          }
        >
          <ArrowRight />
        </IconButton>
      </div>
    </div>
  );
}

function PageView({ page }: { page: Page }) {
  return (
    <div className="flex flex-1 items-center justify-center p-12">
      <p className="text-xl text-center">{page.text}</p>
    </div>
  );
}
