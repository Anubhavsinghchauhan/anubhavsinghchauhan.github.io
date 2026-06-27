import { BrainCircuit, CloudCog, DatabaseZap, Workflow } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  { icon: BrainCircuit, title: "Think", copy: "Model the problem before reaching for the model." },
  { icon: Workflow, title: "Model", copy: "Train, tune, evaluate, and track ML solutions." },
  { icon: DatabaseZap, title: "Pipeline", copy: "Build reliable ETL workflows around trustworthy data." },
  { icon: CloudCog, title: "Serve", copy: "Create APIs and containerized microservices that hold up." },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <Reveal><SectionHeading number="01" eyebrow="About" title="Models are only part of the system." copy="My work connects data engineering, machine learning, AI applications, and production backend services." /></Reveal>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="text-xl leading-9 text-slate-300">
            <p>I build complete AI/ML systems: clean and transform data, train and evaluate models, expose intelligence through APIs, and package services for production.</p>
            <p className="mt-5 text-base leading-8 text-muted">My work spans ETL pipelines, forecasting, RAG and agentic AI, FastAPI services, Dockerized microservices, evaluation, monitoring, and cloud deployment.</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, copy }, index) => (
              <Reveal key={title} delay={index * .06} className="soft-card p-6">
                <Icon className="text-cyan" size={24} />
                <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
