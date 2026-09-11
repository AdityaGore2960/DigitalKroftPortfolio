"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { GitBranch } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  layout?: "default" | "horizontal";
}

export default function ProjectCard({
  project,
  featured = false,
  layout = "default",
}: ProjectCardProps) {
  return (
    <article
      aria-label={`Project: ${project.title}`}
      style={{
        border: "2px solid #111",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#F5F5F2",
        display: layout === "horizontal" ? "grid" : "flex",
        flexDirection: layout === "horizontal" ? undefined : "column",
        gridTemplateColumns: layout === "horizontal" ? "1.2fr 1fr" : undefined,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translate(-3px, -3px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0 #111";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Image area */}
      <div
        style={{
          backgroundColor: "#0d0d0d",
          position: "relative",
          overflow: "hidden",
          height: featured ? 360 : layout === "horizontal" ? "100%" : 220,
          minHeight: layout === "horizontal" ? 280 : undefined,
          borderBottom: layout === "horizontal" ? "none" : "2px solid #111",
          borderRight: layout === "horizontal" ? "2px solid #111" : "none",
        }}
      >
        {/* Simulated project UI placeholder */}
        <ProjectUIPlaceholder projectNumber={project.number} featured={featured} />

        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            backgroundColor: "#F5F5F2",
            border: "1.5px solid #111",
            borderRadius: 4,
            padding: "4px 8px",
            fontSize: 9,
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#080808",
          }}
        >
          {project.category}
        </div>

        {/* Year badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "#080808",
            borderRadius: 4,
            padding: "4px 8px",
            fontSize: 9,
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#F5F5F2",
          }}
        >
          {project.year}
        </div>
      </div>

      {/* Content area */}
      <div style={{ padding: featured ? "28px" : "20px", flex: 1 }}>
        {/* Number + title */}
        <div style={{ marginBottom: 12 }}>
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#999",
              display: "block",
              marginBottom: 4,
            }}
          >
            PROJECT {project.number}
          </span>
          <h3
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: featured ? 32 : 22,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#080808",
              lineHeight: 1.05,
            }}
          >
            {project.title}
          </h3>
        </div>

        <div style={{ height: 1, backgroundColor: "#ddd", marginBottom: 14 }} />

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: featured ? 15 : 13,
            fontWeight: 400,
            color: "#444",
            lineHeight: 1.5,
            marginBottom: 16,
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 20,
          }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#080808",
                backgroundColor: "#E9E9E5",
                border: "1.5px solid #111",
                borderRadius: 4,
                padding: "3px 7px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid #111",
              borderRadius: 5,
              padding: "7px 12px",
              backgroundColor: "#080808",
              color: "#F5F5F2",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#333";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#080808";
            }}
          >
            VIEW PROJECT <span aria-hidden="true">→</span>
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#080808",
              textDecoration: "none",
              border: "2px solid #111",
              borderRadius: 5,
              padding: "7px 12px",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#080808";
              (e.currentTarget as HTMLElement).style.color = "#F5F5F2";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#080808";
            }}
          >
            <GitBranch size={12} />
            CODE
          </Link>
        </div>
      </div>
    </article>
  );
}

// Simulated project UI placeholder
function ProjectUIPlaceholder({
  projectNumber,
  featured,
}: {
  projectNumber: string;
  featured?: boolean;
}) {
  const schemes = {
    "01": { accent: "#2a7a3b", bg: "#0d120e" }, // green — agriculture
    "02": { accent: "#1a4a8a", bg: "#0a0e14" }, // blue — ecommerce
    "03": { accent: "#8a4a1a", bg: "#14100a" }, // amber — dashboard
    "04": { accent: "#4a1a7a", bg: "#0e0a14" }, // purple — business
  };
  const scheme = schemes[projectNumber as keyof typeof schemes] || schemes["01"];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: scheme.bg,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {/* Simulated top bar */}
      <div
        style={{
          backgroundColor: "#111",
          height: 28,
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          gap: 6,
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#333" }} />
        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#333" }} />
        <div style={{ flex: 1, height: 10, borderRadius: 3, backgroundColor: "#1a1a1a", margin: "0 6px" }} />
        <div
          style={{
            width: 40,
            height: 16,
            borderRadius: 3,
            backgroundColor: scheme.accent,
          }}
        />
      </div>

      {/* Simulated content rows */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 8 }}>
        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                height: 18,
                borderRadius: 3,
                backgroundColor: i === 1 ? scheme.accent : "#1a1a1a",
                opacity: 0.8,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {/* Hero block */}
          <div
            style={{
              height: featured ? 120 : 70,
              borderRadius: 6,
              backgroundColor: "#1a1a1a",
              border: `1px solid ${scheme.accent}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "80%",
                height: 3,
                backgroundColor: scheme.accent,
                opacity: 0.5,
                borderRadius: 2,
                position: "absolute",
                top: "30%",
              }}
            />
            <div
              style={{
                width: "60%",
                height: 3,
                backgroundColor: scheme.accent,
                opacity: 0.3,
                borderRadius: 2,
                position: "absolute",
                top: "50%",
              }}
            />
          </div>

          {/* Card row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                style={{
                  height: 40,
                  borderRadius: 4,
                  backgroundColor: "#1a1a1a",
                  border: `1px solid #222`,
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ height: 4, borderRadius: 2, backgroundColor: scheme.accent, width: "70%" }} />
                <div style={{ height: 3, borderRadius: 2, backgroundColor: "#333", width: "90%" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
