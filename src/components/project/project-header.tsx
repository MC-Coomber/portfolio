import Project from "@/data/project";
import Image from "next/image";
import Link from "next/link";

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="flex flex-col px-12">
      <Link href={"/"}>
        <header className="flex flex-col gap-1 justify-start py-12 px-24">
          <h1 className="text-2xl font-semibold">Mike Coomber</h1>
          <h2 className="text-xl">Front End Developer</h2>
        </header>
      </Link>
      <div className="self-center flex flex-col items-center">
        <h1 className="text-6xl font-semibold text-center">{project?.name}</h1>
        <h3 className="text-xl font-semibold pt-2">{project?.role}</h3>
        <ul className="flex flex-wrap gap-2 pt-4 items-center justify-center">
          {project.tools &&
            project.tools.map((tool, index) => (
              <div
                key={index}
                className="flex gap-2 rounded-full bg-gray-200 py-2 px-4"
              >
                {tool.image && (
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={24}
                    height={24}
                  />
                )}
                {tool.name}
              </div>
            ))}
        </ul>
        <div
          className="flex gap-8 justify-between pt-16"
          style={{ maxWidth: "75%" }}
        >
          <h3 className="flex flex-1">{project?.description}</h3>
        </div>
      </div>
    </div>
  );
}
