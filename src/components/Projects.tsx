import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="shell">
        <Reveal><SectionHeading number="03" eyebrow="Selected work" title="Systems, not just models." copy="A snapshot of applied AI work spanning retrieval, forecasting, language, and speech." /></Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
