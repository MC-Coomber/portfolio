import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/utils/url-for";
import { getTools } from "@/sanity/api";
import { useEffect, useState } from "react";
import { Project, Tool } from "../../../sanity.types";

export default function ProjectCard({ project }: WorkCardProps) {
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    getTools(project).then((result) => setTools(result));
  }, [tools, setTools])

  return (
    <Link href={`/projects/${project.id?.current}`}>
      <div className="group h-full flex flex-col align-text-top w-full cursor-pointershadow-md rounded-md overflow-hidden relative">
        {project.image && <Image
          src={urlFor(project.image.asset!._ref!)!}
          alt="image"
          height={400}
          width={1200}
          className="flex flex-1 justify-start items-center object-contain object-center group-hover:scale-105 transition-all"
        />}
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col p-8 bg-slate-300 bg-opacity-0 group-hover:bg-opacity-30">
          {project.logo && <Image src={urlFor(project.logo.asset!._ref!)!} width={800} height={400} alt="zebra" className="w-1/4 pb-4" />}
          <div className="flex flex-1 flex-col justify-start gap-8">
            <div className="text-gray-800">
              <h1 className="font-semibold text-xl lg:text-2xl">
                {project.name}
              </h1>
              <h2 className="font-medium text-sm lg:text-md">{project.role}</h2>
            </div>
            <div className="hidden sm:flex gap-4 w-1/2 flex-wrap">
              {tools
                .filter((tool) => tool)
                .map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-lg bg-gray-950 p-2"
                    style={{ minWidth: 12 }}
                  >
                    <Image
                      src={urlFor(tool.image?.asset?._ref!) ?? ''}
                      alt={tool.name ?? ''}
                      height={28}
                      width={28}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface WorkCardProps {
  project: Project;
}
