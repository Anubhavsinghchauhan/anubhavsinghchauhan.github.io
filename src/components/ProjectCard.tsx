"use client";

import type { Project } from "@/types/project";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "forecast") return <div className="chart-visual"><span /><i /><b /><em /></div>;
  if (type === "match") return <div className="match-visual"><span>82</span><span>94</span><span>76</span></div>;
  if (type === "voice") return <div className="voice-visual">{[18,36,58,30,70,46,25,62,38,20].map((h, i) => <i key={i} style={{ height: h }} />)}</div>;
  return <div className="rag-visual"><span>DOCS</span><i /><span>VECTOR</span><i /><span>ANSWER</span></div>;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .15 }}
      transition={{ delay: index * .06, duration: .55 }}
      whileHover={{ y: -7 }}
      className="project-card"
    >
      <div className="project-visual"><ProjectVisual type={project.visual} /></div>
      <div className="p-6 sm:p-7">
        <p className="font-mono text-[11px] uppercase tracking-[.16em] text-cyan">{project.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-4 leading-7 text-muted">{project.description}</p>
        <p className="mt-4 border-l border-accent/50 pl-4 text-sm leading-6 text-slate-300">{project.impact}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}
        </div>
        <div className="mt-7 flex items-center gap-5 text-sm">
          {project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="project-link"><Github size={16} /> Code</a> : <span className="project-link cursor-default opacity-40"><Github size={16} /> Private</span>}
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">Live demo <ArrowUpRight size={16} /></a>}
        </div>
      </div>
    </motion.article>
  );
}
