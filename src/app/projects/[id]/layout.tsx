import { ProjectHeader } from "@/components/project/project-header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
