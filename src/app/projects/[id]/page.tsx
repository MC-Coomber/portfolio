import { getProjectById } from "@/sanity/api";
import { Footer } from "@/components/home/footer";
import { ProjectHeader } from "@/components/project/project-header";
import Page from "@/data/page";
import clsx from "clsx";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id);

  return (
    <div className=" h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      {project?.pages.map((page, index) => (
        <div key={index} className="snap-center">
          {index == 0 && <ProjectHeader project={project} />}
          {ProjectPage(page)}
          {index == project.pages.length - 1 && <Footer />}
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
          className="flex flex-col items-center gap-4 relative w-full h-full"
          style={{ minHeight: "45%", flex: "1.8" }}
        >
          <Image
            src={page.imageUrl!}
            fill={true}
            alt="img"
            className="flex object-contain"
          />
          {page.imageCaption && (
            <label className="absolute bottom-0 italic">
              {page.imageCaption}
            </label>
          )}
        </div>
      )}
      <div className="text-left flex flex-1 flex-col gap-8 px-12 max-w-xl md:max-h-full justify-start">
        <h2 className={"font-semibold text-4xl text-clip"}>{page.title}</h2>
        <div>{page.text}</div>
      </div>
    </div>
  );
}
