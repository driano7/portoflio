import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";

const footerLinks = [
  {
    href: "https://wa.me/525512291607",
    label: "WhatsApp",
    icon: MessageCircle,
  },
  {
    href: "https://t.me/driano7",
    label: "Telegram",
    icon: Send,
  },
  {
    href: "mailto:donovanriano@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://github.com/driano7",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/driano7",
    label: "Linked in",
    icon: Linkedin,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-zinc-800/70 bg-black/25 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {footerLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 transition-colors hover:border-violet-400/50 hover:text-white"
              >
                <Icon className="h-3.5 w-3.5 text-violet-300" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
