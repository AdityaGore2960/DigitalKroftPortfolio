"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Button from "./Button";
import FeaturedProject from "./FeaturedProject";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 65px)",
        display: "flex",
        flexDirection: "column",
        borderBottom: "2px solid #111",
        overflow: "hidden",
      }}
    >
      {/* Top separator label row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 28px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          PORTFOLIO
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-label"
        >
          {siteConfig.role} — {siteConfig.location}
        </motion.span>
      </div>

      {/* Main hero content */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto 1fr",
          padding: "32px 28px 32px",
          gap: 0,
          position: "relative",
        }}
      >
        {/* ── HEADLINE ── */}
        <div style={{ gridColumn: "1", marginBottom: "auto" }}>
          <h1
            className="headline"
            style={{
              fontSize: "clamp(58px, 9.5vw, 128px)",
              lineHeight: 0.88,
              letterSpacing: "-0.025em",
              maxWidth: "78%",
              marginBottom: 0,
            }}
          >
            {siteConfig.tagline.split("\n").map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                style={{ display: "block" }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* ── BOTTOM SECTION: intro + project ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "end",
            gap: "40px",
            marginTop: "auto",
            paddingTop: "40px",
          }}
          className="hero-bottom"
        >
          {/* BOTTOM LEFT: intro + availability + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            style={{ maxWidth: 520 }}
          >
            {/* Availability indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
              }}
            >
              <div
                className="avail-dot"
                style={{
                  backgroundColor: siteConfig.availability ? "#080808" : "#999",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#080808",
                }}
              >
                {siteConfig.availabilityText}
              </span>
            </div>

            {/* Intro paragraph */}
            <p
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(16px, 1.6vw, 22px)",
                fontWeight: 400,
                color: "#3a3a38",
                lineHeight: 1.35,
                marginBottom: 28,
              }}
            >
              {siteConfig.bio}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button href="#contact" variant="primary">
                LET&apos;S CONNECT
              </Button>
              <Button href="#projects" variant="secondary">
                VIEW PROJECTS
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "14px",
          gap: 8,
          borderTop: "1px solid #ddd",
        }}
      >
        <span className="section-label">SCROLL TO EXPLORE</span>
        <span style={{ fontSize: 12, color: "#666" }}>↓</span>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-bottom {
            grid-template-columns: 1fr !important;
            padding-top: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
