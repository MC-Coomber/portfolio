
import { Profile, Project, Tool } from "../../sanity.types";
import { client } from "./utils/client";
import { groq } from "next-sanity";

export async function getProjects() {
  return client.fetch<Project[]>(
    groq`*[_type == "project"]`
  );
}

export async function getProfile() {
  return client.fetch<Profile>(
    groq`*[_type == "profile"][0]`
  );
}

export async function getProjectById(id: string) {
  return client.fetch<Project>(
    groq`*[_type == "project" && id.current == $id][0]`,
    {
      id: id
    }
  );
}

export async function getTools(project: Project) {
  const ids = (project.tools ?? []).map((tool) => tool._ref);
  return client.fetch<Tool[]>(
    groq`*[_type == "tool" && _id in $ids]`,
    {
      ids: ids
    }
  );
}