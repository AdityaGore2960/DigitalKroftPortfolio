"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skillCategories } from "@/data/skills";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      aria-label="Skills and technologies"
      style={{
        borderBottom: "2px solid #111",
        padding: "80px 28px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 60,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <motion.h2
          className="headline"
          style={{ fontSize: "clamp(44px, 5.5vw, 80px)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          WHAT
          <br />WE WORK WITH.
        </motion.h2>

        <SectionLabel>TECHNOLOGIES</SectionLabel>
      </div>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {skillCategories.map((cat, i) => {
          const isHovered = hoveredId === cat.id;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: "relative",
                borderRadius: 5,
                padding: "32px 28px",
                backgroundColor: isHovered ? "#080808" : "transparent",
                border: "2px solid #111",
                cursor: "default",
                overflow: "hidden",
                transition: "all 0.2s ease",
              }}
            >

              {/* Icon + Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isHovered ? "#1a1a1a" : "#111",
                    border: `1px solid ${isHovered ? "#333" : "#1f1f1f"}`,
                    fontSize: 18,
                    fontFamily: "var(--font-anton)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: isHovered ? "#F5F5F2" : "#555",
                    flexShrink: 0,
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: isHovered ? "#000" : "#000",
                      marginBottom: 2,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-anton)",
                      fontSize: "clamp(18px, 2.2vw, 26px)",
                      letterSpacing: "0.04em",
                      color: isHovered ? "#F5F5F2" : "#ccc",
                      transition: "color 0.2s ease",
                      margin: 0,
                    }}
                  >
                    {cat.category.toUpperCase()}
                  </h3>
                </div>

                {/* Arrow — mirrors Services section */}
                <span
                  style={{
                    fontSize: 20,
                    color: isHovered ? "#F5F5F2" : "transparent",
                    transition: "all 0.2s ease",
                    transform: isHovered ? "translateX(0)" : "translateX(-10px)",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: isHovered ? "#222" : "#161616",
                  marginBottom: 20,
                  transition: "background 0.2s ease",
                }}
              />

              {/* Skill Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 + j * 0.05 }}
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "2px 6px",
                      borderRadius: 3,
                      border: `1px solid ${isHovered ? "#333" : "#1f1f1f"}`,
                      color: isHovered ? "#666" : "#000",
                      transition: "all 0.2s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

