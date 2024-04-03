import Home from "@/components/home/home";
import { getProfile, getProjects } from "@/sanity/api";

export default async function Page() {
  const projects = await getProjects();
  const profile = await getProfile();

  return (
    <Home projects={projects} profile={profile} />
  );
}
