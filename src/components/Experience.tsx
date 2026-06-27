import { experience } from "@/data/experience";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section border-y border-white/[.06] bg-white/[.015]">
      <div className="shell">
        <Reveal><SectionHeading number="04" eyebrow="Experience" title="Building where it counts." /></Reveal>
        {experience.map((item) => (
          <Reveal key={item.company} className="grid gap-8 border-t border-white/10 py-9 lg:grid-cols-[.33fr_.67fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.16em] text-cyan">{item.period}</p>
              <h3 className="mt-4 text-2xl font-semibold">{item.role}</h3>
              <p className="mt-1 text-muted">{item.company}</p>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-300">{item.summary}</p>
              <ul className="mt-7 space-y-4">
                {item.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted"><Check className="mt-1 shrink-0 text-cyan" size={16} />{highlight}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
