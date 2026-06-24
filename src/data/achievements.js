import { 
  FaTrophy, 
  FaAward, 
  FaGraduationCap, 
  FaUsers 
} from 'react-icons/fa';

export const achievements = [
  {
    id: 1,
    title: "300+ DSA Problems Solved",
    category: "Coding",
    icon: FaTrophy,
    glowColor: "rgba(124, 58, 237, 0.4)", // Violet
    description: "Consistent problem solver across LeetCode and GeeksforGeeks, mastering recursion, DP, graphs, and greedy trees.",
    metric: "300+",
    sub: "LeetCode Count",
    size: "large" // Bento Card sizing specifier
  },
  {
    id: 2,
    title: "Meta Front-End Certified",
    category: "Certifications",
    icon: FaAward,
    glowColor: "rgba(6, 182, 212, 0.4)", // Cyan
    description: "Completed the 9-course professional front-end specialization covering React, UX design basics, HTML/CSS, and version control.",
    metric: "Meta",
    sub: "Professional Credential",
    size: "medium"
  },
  {
    id: 3,
    title: "9.2 CGPA Academic Track",
    category: "Academic",
    icon: FaGraduationCap,
    glowColor: "rgba(236, 72, 153, 0.4)", // Pink
    description: "Top performer in B.Tech CSE coursework. Excelling in Discrete Mathematics, Computer Systems, and Object-Oriented Design.",
    metric: "9.2",
    sub: "Current CGPA",
    size: "medium"
  },
  {
    id: 4,
    title: "Open Source Advocate",
    category: "Community",
    icon: FaUsers,
    glowColor: "rgba(16, 185, 129, 0.4)", // Emerald
    description: "Organized local Git workshops at Newton School. Contributed to documentation translations and UI styling modules globally.",
    metric: "Active",
    sub: "Tech Community",
    size: "small"
  }
];
