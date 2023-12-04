import WorkModel from "@/data/work";
import { createContext } from "react";

interface SelectedWorkContextProps {
  selectedWork: WorkModel | undefined;
  setSelectedWork: (val: WorkModel | undefined) => void;
}

export const SelectedWorkContext = createContext<SelectedWorkContextProps>({
  selectedWork: undefined,
  setSelectedWork: (val) => {},
});
