"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        borderTop: "2px solid #111",
        padding: "24px 28px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: 16,
      }}
    >
      {/* LEFT: AG Logo + name */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            backgroundColor: "#080808",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #111",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: 12,
              color: "#F5F5F2",
              letterSpacing: "0.05em",
            }}
          >
            DK
          </span>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#080808",
            }}
          >
            {siteConfig.initials}.
          </div>
          <div
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 9,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#999",
            }}
          >
            {siteConfig.role}
          </div>
        </div>
      </div>

      {/* CENTER: Built with + copyright */}
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#999",
            marginBottom: 2,
          }}
        >
        </p>
        
      </div>

      {/* RIGHT: Social links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 8,
        }}
      >
        {[
          { label: "GITHUB", href: siteConfig.github },
          { label: "LINKEDIN", href: siteConfig.linkedin },
          { label: "EMAIL", href: `mailto:${siteConfig.email}` },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={link.label}
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#666",
              textDecoration: "none",
              border: "1.5px solid #ccc",
              borderRadius: 4,
              padding: "5px 8px",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#080808";
              (e.currentTarget as HTMLElement).style.color = "#F5F5F2";
              (e.currentTarget as HTMLElement).style.borderColor = "#080808";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#666";
              (e.currentTarget as HTMLElement).style.borderColor = "#ccc";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          footer {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 20px !important;
          }
          footer > div:first-child {
            justify-content: center !important;
          }
          footer > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
