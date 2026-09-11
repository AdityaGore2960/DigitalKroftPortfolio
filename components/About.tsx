"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/config";
import SectionLabel from "./SectionLabel";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      aria-label="About me"
      style={{
        borderBottom: "2px solid #111",
        padding: "80px 28px",
      }}
    >
      <SectionLabel style={{ marginBottom: 32 }}>
        ABOUT US
      </SectionLabel>

      {/* Two column layout */}
      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* LEFT: Big heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="headline"
            style={{ fontSize: "clamp(52px, 6.5vw, 92px)", lineHeight: 0.88 }}
          >
            A LITTLE
            <br />
            ABOUT
            <br />
            US.
          </h2>

          {/* Profile image — editorial rectangular crop */}
          <div
            style={{
              marginTop: 40,
              width: 220,
              height: 220,
              border: "3px solid #111",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "6px 6px 0 #111",
              backgroundColor: "#1a1a1a",
            }}
          >
            {/* Placeholder profile — monochrome editorial style */}
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#171717",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {/* Abstract head silhouette */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#333",
                  border: "2px solid #444",
                }}
              />
              <div
                style={{
                  width: 80,
                  height: 40,
                  borderRadius: "40px 40px 0 0",
                  backgroundColor: "#2a2a2a",
                  border: "2px solid #444",
                  borderBottom: "none",
                  marginTop: 4,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 9,
                  color: "#555",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginTop: 8,
                }}
              >
                {siteConfig.initials}
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          style={{ paddingTop: "12px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(17px, 1.5vw, 22px)",
              fontWeight: 400,
              color: "#2a2a28",
              lineHeight: 1.45,
              marginBottom: 28,
            }}
          >
            {siteConfig.aboutBio}
          </p>

          {/* Stat grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              border: "2px solid #111",
              borderRadius: 8,
              overflow: "hidden",
              backgroundColor: "#111",
              marginTop: 40,
            }}
          >
            {[
              { num: "4+", label: "Working Years" },
              { num: "10+", label: "Projects Built" },
              { num: "8+", label: "Technologies" },
              { num: "10+", label: "Clients" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "#F5F5F2",
                  padding: "20px 24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-anton)",
                    fontSize: 42,
                    color: "#080808",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#666",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Location + availability */}
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div className="section-label" style={{ marginBottom: 4 }}>Location</div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#080808",
                }}
              >
                {siteConfig.location}
              </div>
            </div>
            <div>
              <div className="section-label" style={{ marginBottom: 4 }}>Status</div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#080808",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div className="avail-dot" />
                {siteConfig.availabilityText}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
