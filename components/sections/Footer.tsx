"use client";

import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/shared/SocialIcons";
import { profile } from "@/data/profile";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-bg-primary" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top — tagline */}
        <div className="flex items-baseline gap-1 mb-10">
          <span className="font-heading text-3xl font-bold text-text-primary">FERDY</span>
          <span className="text-3xl font-bold text-accent leading-none">.</span>
        </div>

        {/* Middle row */}
        <div className="grid sm:grid-cols-3 gap-8 pb-8 border-b border-border">
          {/* Copyright */}
          <p className="text-caption text-text-muted">
            © {currentYear} Ferdy Alwondho.
            <br />
            All rights reserved.
          </p>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-4 gap-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-caption text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3 sm:justify-end">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg border border-border text-text-secondary
                         hover:border-border-hover hover:text-text-primary transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-lg border border-border text-text-secondary
                           hover:border-border-hover hover:text-text-primary transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="p-2 rounded-lg border border-border text-text-secondary
                         hover:border-border-hover hover:text-text-primary transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <p className="text-caption text-text-muted mt-6 text-center sm:text-left">
          Built with Next.js · Hosted on Vercel
        </p>
      </div>
    </footer>
  );
}
