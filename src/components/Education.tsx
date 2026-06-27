import { education } from "@/data/experience";
import { GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="shell">
        <Reveal><SectionHeading number="05" eyebrow="Education" title="Still learning. Deliberately." copy="Formal foundations strengthened by a broad applied curriculum across the modern AI stack." /></Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * .08} className="soft-card p-7 sm:p-9">
              <div className="flex items-start justify-between gap-5">
                <GraduationCap className="text-cyan" size={28} />
                <span className="font-mono text-xs text-muted">{item.period}</span>
              </div>
              <h3 className="mt-9 text-xl font-semibold">{item.degree}</h3>
              <p className="mt-2 text-accent">{item.school}</p>
              <p className="mt-5 text-sm leading-6 text-muted">{item.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
