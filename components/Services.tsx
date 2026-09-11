"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { services } from "@/data/services";
import SectionLabel from "./SectionLabel";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      aria-label="Services"
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
          marginBottom: 48,
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
          OUR
          <br />SERVICES
        </motion.h2>

        <SectionLabel>SERVICES</SectionLabel>
      </div>

      {/* Service rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            className="service-row"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              borderBottom: "1px solid #111",
              cursor: "default",
              transition: "all 0.2s ease",
              overflow: "hidden",
              backgroundColor: hoveredIndex === i ? "#080808" : "transparent",
              color: hoveredIndex === i ? "#F5F5F2" : "#080808",
            }}
          >
            <div
              style={{
                padding: "28px 24px",
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: "20px",
                alignItems: "center",
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  letterSpacing: "0.02em",
                  color: hoveredIndex === i ? "#333" : "#ddd",
                  transition: "color 0.2s ease",
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {service.number}
              </span>

              {/* Title + description */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-anton)",
                    fontSize: "clamp(20px, 2.5vw, 36px)",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    color: hoveredIndex === i ? "#F5F5F2" : "#080808",
                    transition: "color 0.2s ease",
                    marginBottom: 8,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: 13,
                    fontWeight: 400,
                    color: hoveredIndex === i ? "#aaa" : "#666",
                    lineHeight: 1.5,
                    maxWidth: 480,
                    transition: "color 0.2s ease",
                  }}
                >
                  {service.description}
                </p>

                {/* Deliverables */}
                <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                  {service.deliverables.map((d) => (
                    <span
                      key={d}
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: hoveredIndex === i ? "#666" : "#999",
                        border: `1px solid ${hoveredIndex === i ? "#333" : "#ccc"}`,
                        borderRadius: 3,
                        padding: "2px 6px",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow indicator */}
              <span
                style={{
                  fontSize: 24,
                  color: hoveredIndex === i ? "#F5F5F2" : "transparent",
                  transition: "all 0.2s ease",
                  transform: hoveredIndex === i ? "translateX(0)" : "translateX(-10px)",
                }}
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
