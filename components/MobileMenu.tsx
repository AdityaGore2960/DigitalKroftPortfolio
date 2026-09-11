"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SERVICES", href: "#services" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(8,8,8,0.5)",
              zIndex: 998,
            }}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(320px, 90vw)",
              backgroundColor: "#E9E9E5",
              borderLeft: "2px solid #111",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              padding: "24px",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: "#080808",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #111",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-anton)",
                    fontSize: 14,
                    color: "#F5F5F2",
                    letterSpacing: "0.05em",
                  }}
                >
                  AG
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu"
                style={{
                  background: "none",
                  border: "2px solid #111",
                  borderRadius: 6,
                  padding: "6px 8px",
                  cursor: "pointer",
                  color: "#080808",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation Items */}
            <nav style={{ flex: 1 }}>
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.06, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textDecoration: "none",
                      color: "#080808",
                      fontFamily: "var(--font-anton)",
                      fontSize: 36,
                      letterSpacing: "0.02em",
                      borderBottom: "1px solid #ddd",
                      paddingBottom: 18,
                      marginBottom: 18,
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#666";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#080808";
                    }}
                  >
                    {item.label}
                    <span style={{ fontSize: 14, color: "#999" }}>0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <div
              style={{
                borderTop: "1px solid #ddd",
                paddingTop: 20,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#666",
                  marginBottom: 8,
                }}
              >
                {siteConfig.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: 10,
                  color: "#999",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {siteConfig.role}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
