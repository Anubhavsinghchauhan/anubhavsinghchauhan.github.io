"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl" : ""}`}>
      <nav className="shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-semibold" aria-label="Back to home">
          <span className="grid size-9 place-items-center rounded-full border border-accent/40 bg-accent/10 font-mono text-sm text-cyan">AS</span>
          <span className="hidden sm:block">Anubhav Singh</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
          ))}
        </div>
        <a href="mailto:anubhavchauhan.29@gmail.com" className="button-outline hidden sm:inline-flex">Let&apos;s talk</a>
        <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 lg:hidden" aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-6 py-5 backdrop-blur-xl lg:hidden">
          {links.map((link) => (
            <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} className="block py-3 text-muted hover:text-white">{link}</a>
          ))}
        </div>
      )}
    </header>
  );
}
