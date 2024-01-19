import ProjectModel from "@/data/project";
import Image from "next/image";

export default function ProjectCard({ model }: WorkCardProps) {
  return (
    <div className="group flex flex-col gap-4 align-text-top w-full h-min cursor-pointer overflow-hidden">
      <div className="overflow-hidden">
        <Image
          src={model.imageUrl}
          alt="image"
          height={400}
          width={800}
          className="hidden lg:flex flex-1 justify-start items-center object-contain object-center group-hover:scale-105 transition-all"
        />
      </div>
      <div className="flex-col flex-auto ">
        <h3 className="text-xl text-slate-500">{model.name}</h3>
        <h4 className="dd text-base">
          {model.company} | {model.description}
        </h4>
      </div>
    </div>
  );
}

interface WorkCardProps {
  model: ProjectModel;
}
