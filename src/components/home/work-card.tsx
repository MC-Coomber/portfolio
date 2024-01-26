import ProjectModel from "@/data/project";
import Image from "next/image";
import Link from "next/link";
import Zebra from "../../assets/Logo.png";

export default function ProjectCard({ model }: WorkCardProps) {
  return (
    <Link href={`/projects/${model.id}`}>
      <div className="group h-full flex flex-col align-text-top w-full cursor-pointershadow-md rounded-md overflow-hidden relative">
        <Image
          src={model.imageUrl}
          alt="image"
          height={400}
          width={1200}
          className="flex flex-1 justify-start items-center object-contain object-center group-hover:scale-105 transition-all"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col p-4 bg-slate-300 bg-opacity-0 group-hover:bg-opacity-30">
          <Image src={Zebra} alt="zebra" className="w-1/4" />
          <div className="flex flex-1 flex-col justify-start gap-8">
            <div className="text-gray-600">
              <h1 className="font-semibold text-xl lg:text-2xl">
                {model.name}
              </h1>
              <h2 className="font-medium text-sm lg:text-md">
                {model.description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface WorkCardProps {
  model: ProjectModel;
}
