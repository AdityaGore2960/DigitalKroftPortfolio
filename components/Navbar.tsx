"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "SERVICES", href: "#services", hasDropdown: true },
  { label: "PROJECTS", href: "#projects", hasDropdown: false },
  { label: "ABOUT US", href: "#about", hasDropdown: false },
];

const serviceItems = [
  { label: "Web Development", href: "#services" },
  { label: "Full Stack Development", href: "#services" },
  { label: "Android App Development", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
]

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: scrolled ? "rgba(233,233,229,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "background-color 0.3s ease",
          borderBottom: scrolled ? "1px solid #111" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 28px",
            gap: "10px",
          }}
        >
          {/* ── LEFT: Logo ── */}
          <Link
            href="/"
            aria-label={`${siteConfig.name} — Home`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 120,
                height: 70,
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
                  lineHeight: 1,
                }}
              >
                DigitalKroft
              </span>
            </div>
          </Link>

          {/* ── CENTER: Navigation links (desktop) ── */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {/* Services button — split into label + chevron */}
                  <div style={{ display: "flex", alignItems: "stretch" }}>
                    <Link
                      href={link.href}
                      className="nav-btn"
                      style={{ borderRadius: "6px 0 0 6px", borderRight: "none" }}
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      aria-label="Services submenu"
                      className="nav-btn"
                      style={{
                        borderRadius: "0 6px 6px 0",
                        padding: "0 10px",
                        borderLeft: "1px solid #333",
                        height: 50,
                      }}
                    >
                      <motion.span
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: "flex" }}
                      >
                        <ChevronDown size={13} />
                      </motion.span>
                    </button>
                  </div>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        style={{
                          position: "absolute",
                          top: "calc(100% + 4px)",
                          left: 0,
                          backgroundColor: "#F5F5F2",
                          border: "2px solid #111",
                          borderRadius: 8,
                          padding: "6px",
                          minWidth: 230,
                          zIndex: 200,
                          boxShadow: "4px 4px 0 #111",
                          transformOrigin: "top",
                        }}
                      >
                        {serviceItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            style={{
                              display: "block",
                              padding: "10px 14px",
                              fontSize: 11,
                              fontFamily: "var(--font-space-grotesk)",
                              fontWeight: 600,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "#080808",
                              textDecoration: "none",
                              borderRadius: 5,
                              transition: "all 0.12s ease",
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
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="nav-btn">
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* ── RIGHT: Contact button ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="#contact"
              aria-label="Contact me"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 120,
                height: 70,
                backgroundColor: "#080808",
                borderRadius: 6,
                border: "2px solid #111",
                textDecoration: "none",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 0 rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: 14,
                  color: "#F5F5F2",
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}
              >
                CONTACT
              </span>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="mobile-only"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              style={{
                display: "none",
                background: "none",
                border: "2px solid #111",
                borderRadius: 6,
                padding: "6px 8px",
                cursor: "pointer",
                color: "#080808",
              }}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-only {
              display: flex !important;
            }
          }
        `}</style>
      </motion.nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
