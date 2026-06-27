import type { ExperienceItem } from "@/types/project";

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Infinity Soft System",
    period: "Aug 2025 — Present",
    summary:
      "Building production AI applications and cloud-native services across RAG, agentic workflows, and semantic search.",
    highlights: [
      "Designed end-to-end RAG pipelines from ingestion and embeddings to re-ranking and grounded generation.",
      "Self-hosted Qwen 3 14B AWQ through vLLM with OpenAI-compatible REST endpoints.",
      "Built a local Whisper STT → Qwen LLM → Kokoro TTS voice AI pipeline.",
      "Deployed containerized FastAPI services on Azure with automated CI/CD and application monitoring.",
    ],
  },
];

export const education = [
  {
    degree: "Artificial Intelligence & Machine Learning",
    school: "Scaler",
    period: "2025",
    note: "Applied curriculum spanning ML, deep learning, MLOps, NLP, computer vision, and AI agents.",
  },
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Chandigarh University",
    period: "2022",
    note: "Foundation in software engineering, computer science, and problem solving.",
  },
];
