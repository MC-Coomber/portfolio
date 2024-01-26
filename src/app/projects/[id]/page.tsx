import { getProjectById } from "@/api";
import { ProjectHeader } from "@/components/project/project-header";
import Page from "@/data/page";
import clsx from "clsx";
import Image from "next/image";
import { relative } from "path";

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id);

  return (
    <div className=" h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      {project?.pages.map((page, index) => (
        <div key={index} className="snap-center">
          {index == 0 && <ProjectHeader project={project} />}
          {ProjectPage(page)}
        </div>
      ))}
    </div>
  );
}

function ProjectPage(page: Page) {
  return (
    <div
      className={clsx(
        "h-screen max-h-screen overflow-hidden w-screen p-12 md:p-24 flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center",
        { "justify-start": !page.imageUrl, "justify-center": page.imageUrl }
      )}
    >
      {page.imageUrl && (
        <div
          className="flex relative w-full h-full"
          style={{ minHeight: "50%", flex: "1.8" }}
        >
          <Image
            src={page.imageUrl!}
            fill={true}
            alt="img"
            className="flex object-contain"
          />
        </div>
      )}
      <div className="text-left flex flex-1 flex-col gap-8 px-12 max-w-xl md:max-h-full justify-start">
        <h2 className={clsx("font-semibold text-4xl text-clip", {})}>Title</h2>
        <div>{page.text}</div>
      </div>
    </div>
  );
}
