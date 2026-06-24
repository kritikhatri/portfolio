import { 
  FaCodeBranch, 
  FaTrophy, 
  FaBriefcase, 
  FaAward 
} from 'react-icons/fa';

export const experiences = [
  {
    id: 1,
    title: "Open Source Contributor",
    category: "Open Source",
    icon: FaCodeBranch,
    color: "from-purple-500 to-indigo-500",
    description: "Contributed to 3+ repositories, raised PRs in React ecosystem projects.",
    details: [
      "Resolved bugs in UI component packages, improving compatibility with React 18.",
      "Contributed documentation enhancements to help first-time contributors get set up.",
      "Active participant in Hacktoberfest 2024, merging pull requests across multiple repositories."
    ]
  },
  {
    id: 2,
    title: "Hackathon Competitor",
    category: "Hackathons",
    icon: FaTrophy,
    color: "from-yellow-500 to-amber-500",
    description: "Participated in 2 major hackathons — Smart India Hackathon 2024, HackNST 2024.",
    details: [
      "Built a prototype for Smart India Hackathon 2024 solving a real-world logistics tracking challenge using React and Node.js.",
      "Designed and coded a project in HackNST 2024 (Newton School of Technology internal hackathon), winning the 'Best Design' title among student entries.",
      "Collaborated in cross-functional student teams to design, code, and pitch products within 36-hour cycles."
    ]
  },
  {
    id: 3,
    title: "Aspiring Intern",
    category: "Internships",
    icon: FaBriefcase,
    color: "from-cyan-500 to-blue-500",
    description: "Seeking first software engineering internship — Available starting Summer 2025.",
    details: [
      "Targeting roles at companies like Google, Microsoft, Amazon, Adobe, Atlassian, and rapid-growth tech startups.",
      "Prepared to contribute in front-end development (React), full-stack (Node.js/Express), or general software engineering tracks.",
      "Passionate about writing clean, modular codebase, building test coverage, and aligning designs closely to UI/UX guidelines."
    ]
  },
  {
    id: 4,
    title: "Certified Professional",
    category: "Certifications",
    icon: FaAward,
    color: "from-pink-500 to-rose-500",
    description: "Successfully earned 4 professional certifications in web engineering and designs.",
    details: [
      "Meta Front-End Developer Professional Certificate (Coursera)",
      "Google UX Design Professional Certificate (Coursera)",
      "Algorithms and Data Structures Specialization (Coursera / UC San Diego)",
      "Scientific Computing with Python Certification (freeCodeCamp)"
    ]
  }
];
