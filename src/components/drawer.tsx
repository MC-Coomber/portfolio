import { SelectedWorkContext } from "@/context/selected-work-context";
import ProjectModel from "@/data/work";
import { AppBar, Icon, IconButton } from "@mui/material";
import { useContext, useRef } from "react";
import { Close } from "@mui/icons-material";

export function DrawerContent() {
  const { selectedWork, setSelectedWork } = useContext(SelectedWorkContext);
  const workModel = useRef(selectedWork).current;

  return (
    <>
      <AppBar className="w-full relative p-4 flex-row align-middle items-center">
        <IconButton size="small" onClick={() => setSelectedWork(undefined)}>
          <Close />
        </IconButton>
        <div className="px-2">
          {workModel?.company} | {workModel?.name}
        </div>
      </AppBar>
    </>
  );
}
