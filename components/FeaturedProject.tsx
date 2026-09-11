"use client";

import { siteConfig } from "@/lib/config";
import { ExternalLink } from "lucide-react";

export default function FeaturedProject() {
  const project = siteConfig.featuredProject;

  return (
    <div style={{ width: "100%" }}>
      {/* Project frame */}
      <div
        style={{
          border: "2px solid #111",
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#171717",
          boxShadow: "6px 6px 0 #111",
          position: "relative",
        }}
      >
        {/* Browser chrome bar */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            borderBottom: "1px solid #333",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#444" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#444" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#444" }} />
          <div
            style={{
              flex: 1,
              marginLeft: 8,
              height: 18,
              backgroundColor: "#2a2a2a",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              paddingLeft: 8,
            }}
          >
            <span style={{ fontSize: 9, color: "#666", fontFamily: "var(--font-space-grotesk)" }}>
              agri-platform.vercel.app
            </span>
          </div>
          <ExternalLink size={10} color="#555" />
        </div>

        {/* Simulated project UI */}
        <div
          style={{
            height: 240,
            backgroundColor: "#0d0d0d",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Simulated app navigation */}
          <div
            style={{
              backgroundColor: "#111",
              borderBottom: "1px solid #222",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: "#2a2a2a" }} />
              <div style={{ width: 60, height: 6, borderRadius: 3, backgroundColor: "#2a2a2a" }} />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ width: 40, height: 6, borderRadius: 3, backgroundColor: "#333" }} />
              <div style={{ width: 40, height: 6, borderRadius: 3, backgroundColor: "#333" }} />
              <div style={{ width: 40, height: 6, borderRadius: 3, backgroundColor: "#333" }} />
            </div>
            <div style={{ width: 60, height: 22, borderRadius: 4, backgroundColor: "#2a7a3b" }} />
          </div>

          {/* Simulated hero area */}
          <div style={{ padding: "16px", flex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, height: "100%" }}>
              {/* Left col */}
              <div>
                <div style={{ width: "80%", height: 8, borderRadius: 3, backgroundColor: "#222", marginBottom: 8 }} />
                <div style={{ width: "100%", height: 14, borderRadius: 3, backgroundColor: "#1e1e1e", marginBottom: 6 }} />
                <div style={{ width: "90%", height: 14, borderRadius: 3, backgroundColor: "#1e1e1e", marginBottom: 6 }} />
                <div style={{ width: "70%", height: 14, borderRadius: 3, backgroundColor: "#1e1e1e", marginBottom: 16 }} />
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ width: 60, height: 24, borderRadius: 4, backgroundColor: "#2a7a3b" }} />
                  <div style={{ width: 60, height: 24, borderRadius: 4, backgroundColor: "#222" }} />
                </div>
              </div>
              {/* Right col — card grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 6,
                      border: "1px solid #2a2a2a",
                      padding: "8px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <div style={{ width: 16, height: 16, borderRadius: 4, backgroundColor: "#2a7a3b" }} />
                    <div style={{ width: "70%", height: 5, borderRadius: 2, backgroundColor: "#333" }} />
                    <div style={{ width: "90%", height: 4, borderRadius: 2, backgroundColor: "#2a2a2a" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption below the frame */}
      <div style={{ marginTop: 14 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#666",
            }}
          >
            PROJECT {project.number}
          </span>
          <span
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: 16,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#080808",
            }}
          >
            {project.title}
          </span>
        </div>
        <div style={{ height: 1, backgroundColor: "#111" }} />
      </div>
    </div>
  );
}
