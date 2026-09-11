export interface Service {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "FULL STACK DEVELOPMENT",
    description:
      "End-to-end application development from database design to user interface. I build complete, production-ready web applications that scale.",
    deliverables: [
      "Web Applications",
      "REST APIs",
      "Database Design",
      "Deployment",
    ],
  },
  {
    number: "02",
    title: "FRONTEND DEVELOPMENT",
    description:
      "Pixel-perfect, performant user interfaces using React and Next.js. Focus on accessibility, responsiveness, and exceptional user experience.",
    deliverables: ["React / Next.js", "Responsive Design", "Accessibility", "Performance"],
  },
  {
    number: "03",
    title: "BACKEND & API DEVELOPMENT",
    description:
      "Robust server-side systems using Java, Spring Boot, and Node.js. Clean architecture, security-first approach, and well-documented APIs.",
    deliverables: [
      "REST APIs",
      "Microservices",
      "Authentication",
      "System Design",
    ],
  },
  {
  number: "04",
  title: "UI/UX DESIGN",
  description:
    "We craft intuitive and visually compelling digital experiences that balance user needs with business goals. From early concepts and user flows to high-fidelity interfaces and design systems, we create experiences that are simple, purposeful, and engaging.",
  deliverables: [
    "UX Research & Strategy",
    "Wireframes & Prototypes",
    "High-Fidelity UI Design",
    "Design Systems",
  ],
},
  {
  number: "05",
  title: "MOBILE APP DEVELOPMENT",
  description:
    "End-to-end mobile application development, from intuitive user interfaces to robust backend systems. We build fast, scalable, and production-ready applications that deliver seamless experiences across iOS and Android.",
  deliverables: [
    "iOS & Android Apps",
    "Cross-Platform Development",
    "API & Backend Integration",
    "App Deployment",
  ],
},
];
