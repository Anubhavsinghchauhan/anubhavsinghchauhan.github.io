import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section border-y border-white/[.06] bg-white/[.015]">
      <div className="shell">
        <Reveal><SectionHeading number="02" eyebrow="Capabilities" title="A practical AI/ML toolkit." copy="Selected technologies I use to take ideas through data, modeling, APIs, and deployment." /></Reveal>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * .05} className="bg-ink p-7 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-[.2em] text-cyan">0{i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
