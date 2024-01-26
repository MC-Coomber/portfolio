import { setTimeout } from "timers/promises";
import { allWork } from "./data/all-work";
import Project from "./data/project";

export async function getProjectById(id: string): Promise<Project | undefined> {
  await setTimeout(1);
  return allWork.find((project) => project.id == id);
}
