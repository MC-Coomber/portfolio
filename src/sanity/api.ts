import { setTimeout } from "timers/promises";
import { allWork } from "../data/all-work";
import Project from "../data/project";
import { client } from "./utils/client";
import { groq } from "next-sanity";

export async function getProjectById(id: string): Promise<Project | undefined> {
  await setTimeout(1);
  return allWork.find((project) => project.id == id);
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]`
  );
}