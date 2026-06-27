"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="orb absolute -right-20 top-28 size-80 bg-accent/20" />
      <div className="orb absolute -left-32 bottom-20 size-72 bg-cyan/10" />
      <div className="shell relative z-10 grid items-center gap-16 lg:grid-cols-[1.18fr_.82fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <p className="eyebrow"><Sparkles size={15} /> AI/ML engineering · end to end</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl xl:text-[5.4rem]">
            I build AI & ML systems that move from
            <span className="gradient-text"> prototype to production.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            I&apos;m <strong className="font-medium text-white">Anubhav Singh</strong>, an AI/ML Engineer building production AI applications, trained ML solutions, ETL pipelines, APIs, and containerized microservices.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="button-primary">Explore my work <ArrowDown size={17} /></a>
            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`} className="button-outline" download>Download résumé <Download size={17} /></a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-2"><MapPin size={16} className="text-cyan" /> India · working globally</span>
            <a className="flex items-center gap-1.5 hover:text-white" href="https://www.linkedin.com/in/anubhav-singh-607b051b5/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: .7 }} className="relative mx-auto w-full max-w-md">
          <div className="profile-card">
            <div className="relative z-10">
              <div className="mb-20 flex items-center justify-between text-xs uppercase tracking-[.22em] text-muted">
                <span>AI/ML Engineer</span><span>2026</span>
              </div>
              <div className="avatar-photo">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/profile.png`} alt="Anubhav Singh" />
              </div>
              <div className="mt-8 flex items-end justify-between gap-5">
                <div><p className="text-2xl font-semibold">Anubhav Singh</p><p className="mt-1 text-sm text-muted">Building useful intelligence.</p></div>
                <div className="status-dot" title="Available" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-panel/90 p-4 shadow-glow backdrop-blur">
            <p className="font-mono text-xs text-cyan">CURRENT FOCUS</p>
            <p className="mt-1 text-sm">AI/ML · APIs · Microservices</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
