export interface Project {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  tech: string[];
  github?: string;
  demo?: string;
  visual: "forecast" | "match" | "rag" | "voice";
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}
