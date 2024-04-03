
import { Profile, Project, Tool } from "../../sanity.types";
import { sanityFetch } from "./utils/client";
import { groq } from "next-sanity";

export async function getProjects() {
  return sanityFetch<Project[]>({
    query: groq`*[_type == "project"]`,
    tags: ['projects'],
  });
}

export async function getProfile() {
  return sanityFetch<Profile>({
    query: groq`*[_type == "profile"][0]`,
    tags: ['profile'],
  });
}

export async function getProjectById(id: string) {
  return sanityFetch<Project>({
    query: groq`*[_type == "project" && id.current == $id][0]`,
    qParams: {
      id: id
    },
    tags: ['projects']
  });
}

export async function getTools(project: Project) {
  const ids = (project.tools ?? []).map((tool) => tool._ref);
  return sanityFetch<Tool[]>({
    query: groq`*[_type == "tool" && _id in $ids]`,
    qParams: {
      ids: ids
    },
    tags: ['projects, tools'],
  });
}