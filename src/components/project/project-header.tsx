import Project from "@/data/project";

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="flex flex-col">
      <header className="flex flex-col gap-1 justify-start py-12 px-24">
        <h1 className="text-2xl font-semibold">Mike Coomber</h1>
        <h2 className="text-xl">Front End Developer</h2>
      </header>

      <div className="self-center flex flex-col items-center">
        <h1 className="text-6xl font-semibold text-center">{project?.name}</h1>
        <h3 className="text-xl font-semibold">{project?.role}</h3>
        <div
          className="flex gap-8 justify-between pt-16"
          style={{ maxWidth: "75%" }}
        >
          <h3 className="flex flex-1">{project?.description}</h3>
          <div className="flex flex-1 justify-center">
            <ul className="list-disc">
              {project.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
