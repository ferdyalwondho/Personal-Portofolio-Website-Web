"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about", offset: 40 },
  { label: "Skills", href: "#competencies", offset: 40 },
  { label: "Experience", href: "#experience", offset: 40 },
  { label: "Projects", href: "#projects", offset: 40 },
  { label: "Services", href: "#services", offset: 0 },
  { label: "Contact", href: "#contact", offset: 0 },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      if (window.scrollY < 100) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    const link = navLinks.find((l) => l.href === href);
    const top = el.getBoundingClientRect().top + window.scrollY + (link?.offset ?? 40);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      {/* Skip to content */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]
                   focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm font-medium"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border
                       font-heading font-bold text-sm text-accent hover:border-accent transition-colors"
            aria-label="Ferdy Alwondho — home"
          >
            FA
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    activeSection === link.href.slice(1)
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                  aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                         bg-accent text-accent-foreground hover:bg-accent-hover transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary
                       hover:bg-bg-tertiary transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 pt-16 bg-bg-primary/95 backdrop-blur-md flex flex-col"
          >
            <ul className="flex flex-col gap-1 px-6 pt-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-4 rounded-xl text-lg font-medium
                               text-text-secondary hover:text-text-primary hover:bg-bg-tertiary
                               transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-6 mt-6">
              <a
                href={profile.cvPath}
                download
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-base
                           font-medium bg-accent text-accent-foreground hover:bg-accent-hover transition-colors"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
