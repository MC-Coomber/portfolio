import ProjectModel from "@/data/work";
import { createContext } from "react";

interface SelectedWorkContextProps {
  selectedWork: ProjectModel | undefined;
  setSelectedWork: (val: ProjectModel | undefined) => void;
}

export const SelectedWorkContext = createContext<SelectedWorkContextProps>({
  selectedWork: undefined,
  setSelectedWork: (val) => {},
});
