import { ProjectHeader } from "@/components/project/project-header";
import { ReactNode } from "react";

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) {
  return (
    <div>
      <ProjectHeader />
      {params.id}
      {children}
    </div>
  );
}
