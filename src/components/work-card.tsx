import { SelectedWorkContext } from "@/context/selected-work-context";
import WorkModel from "@/data/work";
import { Drawer } from "@mui/material";
import { useContext, useState } from "react";

export default function WorkCard({ model }: WorkCardProps) {
  const { setSelectedWork } = useContext(SelectedWorkContext);

  return (
    <div
      className="flex gap-4 align-text-top w-full h-min hover:bg-slate-800 p-4 rounded-md cursor-pointer"
      onClick={() => {
        console.log(model);
        setSelectedWork(model);
      }}
    >
      <div className="flex flex-1">
        {model.startDate} - {model.endDate}
      </div>
      <div className="flex-col flex-auto">
        <h3 className="text-xl text-slate-500">{model.company}</h3>
        <h4 className="dd text-base">{model.position}</h4>
        <p className="mt-2">{model.description}</p>
      </div>
    </div>
  );
}

interface WorkCardProps {
  model: WorkModel;
}
