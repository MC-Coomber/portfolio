import ProjectModel from "@/data/project";
import { createContext } from "react";

interface SelectedWorkContextProps {
  selectedWork: ProjectModel | undefined;
  setSelectedWork: (val: ProjectModel | undefined) => void;
}

export const SelectedWorkContext = createContext<SelectedWorkContextProps>({
  selectedWork: undefined,
  setSelectedWork: (val) => {},
});
