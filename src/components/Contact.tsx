import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

const contacts = [
  { label: "Email", value: "anubhavchauhan.29@gmail.com", href: "mailto:anubhavchauhan.29@gmail.com", icon: Mail },
  { label: "Phone", value: "+91 82192 56891", href: "tel:+918219256891", icon: Phone },
  { label: "LinkedIn", value: "Let’s connect", href: "https://www.linkedin.com/in/anubhav-singh-607b051b5/", icon: Linkedin },
  { label: "GitHub", value: "See the code", href: "https://github.com/Anubhavsinghchauhan", icon: Github },
];

export function Contact() {
  return (
    <section id="contact" className="section pb-12">
      <div className="shell">
        <Reveal className="contact-panel">
          <p className="eyebrow">06 <span>Contact</span></p>
          <div className="mt-7 grid gap-9 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-.045em] sm:text-6xl">Have a hard AI/ML problem? <span className="gradient-text">Let’s unpack it.</span></h2>
              <p className="mt-6 max-w-xl leading-7 text-muted">I’m open to AI/ML engineering roles and collaborations where thoughtful systems design matters.</p>
            </div>
            <div className="space-y-3">
              {contacts.map(({ label, value, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-link">
                  <span className="flex items-center gap-3"><Icon size={18} className="text-cyan" /><span><small>{label}</small>{value}</span></span>
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
