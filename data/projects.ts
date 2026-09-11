export interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  category: string;
  year: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Agriculture E-Commerce Platform",
    description:
      "A full-featured multi-vendor agriculture marketplace enabling farmers to list produce directly to consumers. Includes real-time inventory management, order tracking, and an admin analytics dashboard.",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
    image: "/projects/agriculture.jpg",
    github: "",
    live: "#",
    category: "FULL STACK",
    year: "2025",
  },
  {
    number: "02",
    title: "Full Stack E-Commerce Application",
    description:
      "Modern e-commerce platform with product catalog, cart, checkout flow, and payment integration. Built with a REST API backend and a highly optimized React frontend.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    image: "/projects/ecommerce.jpg",
    github: "",
    live: "#",
    category: "FULL STACK",
    year: "2025",
  },
  {
    number: "03",
    title: "Real-Time Monitoring Dashboard",
    description:
      "IoT data visualization platform with live sensor data streams, configurable alert thresholds, and historical trend analysis. WebSocket-powered for instant updates.",
    technologies: ["Next.js", "WebSockets", "InfluxDB", "Grafana", "TypeScript"],
    image: "/projects/dashboard.jpg",
    github: "",
    live: "#",
    category: "ANDROID APP",
    year: "2026",
  },
  {
    number: "04",
    title: "Business Management System",
    description:
      "Comprehensive ERP-style system for SMEs handling employee records, payroll, procurement, and reporting. Role-based access control and audit logging built-in.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker"],
    image: "/projects/business.jpg",
    github: "",
    live: "#",
    category: "AI MODEL",
    year: "2026",
  },
];
