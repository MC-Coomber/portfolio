import ProjectModel from "@/data/project";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ model }: WorkCardProps) {
  return (
    <Link href={`/projects/${model.id}`}>
      <div className="group h-full flex flex-col align-text-top w-full cursor-pointer overflow-hidden shadow-lg rounded-lg">
        <div className="overflow-hidden">
          <Image
            src={model.imageUrl}
            alt="image"
            height={400}
            width={800}
            className="hidden lg:flex flex-1 justify-start items-center object-contain object-center group-hover:scale-110 transition-all"
          />
        </div>
        <div className="flex-col flex-auto p-4">
          <h3 className="text-xl text-slate-500">{model.name}</h3>
          <h4 className="dd text-base">
            {model.company} | {model.description}
          </h4>
        </div>
      </div>
    </Link>
  );
}

interface WorkCardProps {
  model: ProjectModel;
}
