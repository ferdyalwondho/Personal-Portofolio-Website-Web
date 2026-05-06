"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Mail, Phone, Copy, Check } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/SocialIcons";
import { profile } from "@/data/profile";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
  _honeypot: z.string().max(0),
});

type FormValues = z.infer<typeof schema>;

type SubmitState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { _honeypot: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col items-center text-center gap-4 mb-14">
        <span className="text-caption font-heading text-accent tracking-widest uppercase">
          Let&apos;s Talk
        </span>
        <h2
          id="contact-heading"
          className="text-h1 font-heading text-text-primary"
        >
          Have a project in mind?
        </h2>
        <p className="text-body-lg text-text-secondary max-w-xl">
          I&apos;m currently open for select roles and freelance engagements.
          Drop a message — I usually reply within 24 hours.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-5"
          aria-label="Contact form"
        >
          {/* Honeypot */}
          <input
            {...register("_honeypot")}
            type="text"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden"
            autoComplete="off"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-caption text-text-secondary">
                Name <span aria-hidden="true" className="text-accent">*</span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                aria-required="true"
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
                className="px-4 py-3 rounded-xl border border-border bg-bg-secondary text-text-primary
                           text-sm placeholder:text-text-muted focus:outline-none focus:border-accent
                           transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <span id="name-error" role="alert" className="text-caption text-destructive">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-caption text-text-secondary">
                Email <span aria-hidden="true" className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-required="true"
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
                className="px-4 py-3 rounded-xl border border-border bg-bg-secondary text-text-primary
                           text-sm placeholder:text-text-muted focus:outline-none focus:border-accent
                           transition-colors"
                placeholder="you@email.com"
              />
              {errors.email && (
                <span id="email-error" role="alert" className="text-caption text-destructive">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-caption text-text-secondary">
              Subject <span className="text-text-muted">(optional)</span>
            </label>
            <input
              id="subject"
              type="text"
              {...register("subject")}
              className="px-4 py-3 rounded-xl border border-border bg-bg-secondary text-text-primary
                         text-sm placeholder:text-text-muted focus:outline-none focus:border-accent
                         transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-caption text-text-secondary">
              Message <span aria-hidden="true" className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              aria-required="true"
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
              className="px-4 py-3 rounded-xl border border-border bg-bg-secondary text-text-primary
                         text-sm placeholder:text-text-muted focus:outline-none focus:border-accent
                         transition-colors resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
            {errors.message && (
              <span id="message-error" role="alert" className="text-caption text-destructive">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitState === "loading"}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-medium
                       bg-accent text-accent-foreground hover:bg-accent-hover
                       disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-base"
            aria-live="polite"
          >
            {submitState === "loading" ? (
              <span className="inline-block w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" aria-hidden="true" />
            ) : (
              <Send className="w-4 h-4" aria-hidden="true" />
            )}
            {submitState === "loading" ? "Sending…" : "Send Message"}
          </button>

          {/* Feedback */}
          {submitState === "success" && (
            <p role="status" aria-live="polite" className="text-center text-sm text-accent">
              Message sent! I&apos;ll get back to you within 24 hours.
            </p>
          )}
          {submitState === "error" && (
            <p role="alert" aria-live="assertive" className="text-center text-sm text-destructive">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </motion.form>

        {/* Direct contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <p className="text-caption text-text-muted">Or reach me directly →</p>

          <ul className="flex flex-col gap-3" role="list">
            <li>
              <div className="flex items-center justify-between px-4 py-3.5 rounded-xl border border-border bg-bg-secondary gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-text-secondary flex-shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors truncate"
                  >
                    {profile.email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="text-text-muted hover:text-accent transition-colors flex-shrink-0"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </li>

            <li>
              <a
                href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-border bg-bg-secondary
                           hover:border-border-hover transition-colors"
              >
                <Phone className="w-4 h-4 text-text-secondary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-text-secondary">{profile.phone}</span>
              </a>
            </li>

            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-border bg-bg-secondary
                           hover:border-border-hover transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-text-secondary flex-shrink-0" />
                <span className="text-sm text-text-secondary truncate">LinkedIn Profile</span>
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
