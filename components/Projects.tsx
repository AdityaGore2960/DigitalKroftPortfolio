"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      aria-label="Selected projects"
      style={{
        borderBottom: "2px solid #111",
        padding: "80px 28px",
      }}
    >
      {/* Heading row */}
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
          <br />
          WORK
        </motion.h2>

        <SectionLabel>OUR WORK</SectionLabel>
      </div>

      {/* All Projects — Two column */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="two-col-projects"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 24,
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .two-col-projects {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
