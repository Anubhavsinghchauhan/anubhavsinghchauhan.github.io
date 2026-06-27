import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Resume–JD Intelligence",
    eyebrow: "Agentic AI · Semantic Search",
    description:
      "A production-grade platform that parses resumes, extracts skills, and ranks candidates against job descriptions.",
    impact: "Explainable matching with multi-stage LangGraph workflows and privacy-friendly local models.",
    tech: ["LangGraph", "FastAPI", "Pinecone", "Qwen"],
    visual: "match",
  },
  {
    title: "LLM & Voice AI Platform",
    eyebrow: "vLLM · Voice AI",
    description:
      "A local voice AI pipeline connecting Whisper speech recognition, Qwen inference, and streaming Kokoro speech generation.",
    impact: "Serves Qwen 3 14B AWQ through OpenAI-compatible vLLM endpoints with GPU-aware Docker deployment.",
    tech: ["vLLM", "Qwen 3", "Kokoro TTS", "Whisper"],
    visual: "voice",
  },
  {
    title: "Knowledge Assistant",
    eyebrow: "RAG · Enterprise AI",
    description:
      "A grounded document assistant with semantic retrieval, context-aware generation, and citation-backed answers.",
    impact: "Reduces hallucinations through retrieval optimization, prompting, and context validation.",
    tech: ["LangChain", "FAISS", "Docker", "Azure"],
    visual: "rag",
  },
  {
    title: "Water pH Forecasting",
    eyebrow: "Forecasting · MLOps",
    description:
      "An end-to-end forecasting pipeline for treated-water pH prediction, monitoring, and automated retraining.",
    impact: "Benchmarks SARIMA and ML models with MLflow tracking and real-time inference APIs.",
    tech: ["SARIMA", "XGBoost", "MLflow", "FastAPI"],
    visual: "forecast",
  },
];
