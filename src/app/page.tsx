import "./globals.css";
import { client } from "@/sanity/utils/client";
import { Project } from "@/sanity/types";
import Home from "@/components/home/home";
import { getProjects } from "@/sanity/api";

export default async function Page() {
  const projects = await getProjects();
  console.log(projects[0].image.asset);
  return (
    <Home projects={projects} />
  );
}
