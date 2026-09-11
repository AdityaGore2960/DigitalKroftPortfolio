"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error: any) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Contact"
      style={{
        padding: "80px 28px 100px",
        borderBottom: "2px solid #111",
      }}
    >
      <SectionLabel style={{ marginBottom: 24 }}>GET IN TOUCH</SectionLabel>

      {/* Oversized CTA heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ marginBottom: 72 }}
      >
        <h2
          className="headline"
          style={{
            fontSize: "clamp(52px, 8vw, 120px)",
            lineHeight: 0.88,
            marginBottom: 24,
          }}
        >
          LET&apos;S
          <br />
          BUILD
          <br />
          SOMETHING.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(15px, 1.5vw, 20px)",
            color: "#444",
            lineHeight: 1.45,
            maxWidth: 480,
          }}
        >
          Have a project in mind? We&apos;re open to freelance work, collaborations, and full-time opportunities. Let&apos;s build something great together.
        </p>
      </motion.div>

      {/* Two-column: social links + form */}
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* LEFT: Direct links */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 20,
            }}
          >
            DIRECT LINKS
          </p>

          {[
            { label: "EMAIL", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
            { label: "LINKEDIN", value: "linkedin.com/in/DigitalKroft", href: siteConfig.linkedin },
            { label: "GITHUB", value: "github.com/DigitalKroft", href: siteConfig.github },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label}: ${link.value}`}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 0",
                borderBottom: "1px solid #ddd",
                textDecoration: "none",
                transition: "all 0.15s ease",
                borderLeft: "3px solid transparent",
                paddingLeft: 12,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = "#080808";
                (e.currentTarget as HTMLElement).style.paddingLeft = "16px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
                (e.currentTarget as HTMLElement).style.paddingLeft = "12px";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#999",
                  marginBottom: 3,
                }}
              >
                {link.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#080808",
                }}
              >
                {link.value}
              </span>
            </a>
          ))}

          {/* GET IN TOUCH CTA */}
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Send an email"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 32,
              backgroundColor: "#080808",
              color: "#F5F5F2",
              border: "2px solid #111",
              borderRadius: 8,
              padding: "14px 24px",
              textDecoration: "none",
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translate(-3px, -3px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "5px 5px 0 #333";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            GET IN TOUCH <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        {/* RIGHT: Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 20,
            }}
          >
            SEND A MESSAGE
          </p>

          {status === "success" ? (
            <div
              style={{
                border: "2px solid #111",
                borderRadius: 8,
                padding: "32px",
                backgroundColor: "#F5F5F2",
                textAlign: "center",
              }}
            >
              <div style={{ fontFamily: "var(--font-anton)", fontSize: 32, marginBottom: 8 }}>
                SENT.
              </div>
              <p style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 13, color: "#666" }}>
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {status === "error" && (
                <div style={{ 
                  marginBottom: 16, 
                  padding: 12, 
                  backgroundColor: "#fee2e2", 
                  color: "#ef4444", 
                  borderRadius: 8, 
                  fontFamily: "var(--font-space-grotesk)", 
                  fontSize: 13 
                }}>
                  {errorMessage}
                </div>
              )}
              <div style={{ marginBottom: 16 }}>
                <label htmlFor="contact-name" className="form-label">
                  NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-input"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  autoComplete="name"
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label htmlFor="contact-email" className="form-label">
                  EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  autoComplete="email"
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label htmlFor="contact-message" className="form-label">
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  className="form-input"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  style={{ resize: "vertical", minHeight: 120 }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                aria-label={status === "loading" ? "Sending message" : "Send message"}
                style={{
                  width: "100%",
                  backgroundColor: status === "loading" ? "#444" : "#080808",
                  color: "#F5F5F2",
                  border: "2px solid #111",
                  borderRadius: 8,
                  padding: "14px 24px",
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "all 0.15s ease",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (status === "loading") return;
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#222";
                  (e.currentTarget as HTMLElement).style.transform = "translate(-2px, -2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 #333";
                }}
                onMouseLeave={(e) => {
                  if (status === "loading") return;
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#080808";
                  (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {status === "loading" ? "SENDING..." : (
                  <>SEND MESSAGE <span aria-hidden="true">→</span></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
