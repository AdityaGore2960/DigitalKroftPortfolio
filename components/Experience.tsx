"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      aria-label="Experience and journey"
      style={{
        borderBottom: "2px solid #111",
        padding: "80px 28px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 56,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <motion.h2
          className="headline"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          EXPERIENCE
          <br />
        </motion.h2>

        <SectionLabel>{experiences.length} ENTRIES</SectionLabel>
      </div>

      {/* Timeline */}
      <div>
        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.year}-${i}`}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: "24px",
              borderBottom: "1px solid #ddd",
              paddingBottom: 32,
              marginBottom: 32,
            }}
            className="experience-entry"
          >
            {/* Year */}
            <div style={{ paddingTop: 4 }}>
              <span
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: 28,
                  color: "#080808",
                  letterSpacing: "0.02em",
                  display: "block",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {exp.year}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#999",
                }}
              >
                {exp.type}
              </span>
            </div>

            {/* Content */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "clamp(20px, 2.5vw, 32px)",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "#080808",
                  lineHeight: 1.05,
                  marginBottom: 4,
                }}
              >
                {exp.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#666",
                  marginBottom: 14,
                }}
              >
                {exp.company}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#444",
                  lineHeight: 1.55,
                  maxWidth: 560,
                }}
              >
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .experience-entry {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
