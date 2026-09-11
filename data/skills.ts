export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  color: string;
  gradient: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    icon: "F",
    color: "#000000",
    gradient: "linear-gradient(135deg, #7C3AED22, #a855f711)",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    category: "Backend",
    icon: "B",
    color: "#0EA5E9",
    gradient: "linear-gradient(135deg, #0EA5E922, #38bdf811)",
    skills: ["Node.js", "Express", "Python", "REST APIs"],
  },
  {
    id: "mobile",
    category: "Mobile",
    icon: "M",
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B98122, #34d39911)",
    skills: ["React Native", "Flutter"],
  },
  {
    id: "database",
    category: "Database",
    icon: "D",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B22, #fbbf2411)",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    id: "cloud",
    category: "Cloud & Tools",
    icon: "C",
    color: "#EF4444",
    gradient: "linear-gradient(135deg, #EF444422, #f8717111)",
    skills: ["AWS", "Vercel", "Docker", "Git", "GitHub"],
  },
];
