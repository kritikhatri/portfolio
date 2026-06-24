import { 
  FaPython, 
  FaJs, 
  FaJava, 
  FaHtml5, 
  FaCss3, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaGitAlt, 
  FaGithub, 
  FaDocker 
} from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiRedux, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress, 
  SiFastapi, 
  SiMongodb, 
  SiPostgresql, 
  SiFirebase, 
  SiVscodium, 
  SiPostman, 
  SiPytorch, 
  SiTensorflow, 
  SiOpencv, 
  SiNumpy, 
  SiPandas 
} from 'react-icons/si';

export const skills = {
  languages: [
    { name: "JavaScript", icon: FaJs, level: "Advanced", percentage: 85 },
    { name: "Python", icon: FaPython, level: "Advanced", percentage: 80 },
    { name: "Java", icon: FaJava, level: "Intermediate", percentage: 70 },
    { name: "C++", icon: SiCplusplus, level: "Intermediate", percentage: 65 },
    { name: "HTML5", icon: FaHtml5, level: "Advanced", percentage: 90 },
    { name: "CSS3", icon: FaCss3, level: "Advanced", percentage: 85 }
  ],
  frontend: [
    { name: "React", icon: FaReact, level: "Advanced", percentage: 80 },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", percentage: 90 },
    { name: "Next.js", icon: SiNextdotjs, level: "Intermediate", percentage: 60 },
    { name: "Redux Toolkit", icon: SiRedux, level: "Intermediate", percentage: 70 }
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, level: "Advanced", percentage: 75 },
    { name: "Express", icon: SiExpress, level: "Advanced", percentage: 80 },
    { name: "FastAPI", icon: SiFastapi, level: "Beginner", percentage: 45 }
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb, level: "Intermediate", percentage: 75 },
    { name: "PostgreSQL", icon: SiPostgresql, level: "Intermediate", percentage: 60 },
    { name: "Firebase", icon: SiFirebase, level: "Intermediate", percentage: 70 },
    { name: "SQL", icon: FaDatabase, level: "Intermediate", percentage: 75 }
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, level: "Advanced", percentage: 85 },
    { name: "GitHub", icon: FaGithub, level: "Advanced", percentage: 85 },
    { name: "Docker", icon: FaDocker, level: "Beginner", percentage: 40 },
    { name: "VS Code", icon: SiVscodium, level: "Advanced", percentage: 95 },
    { name: "Postman", icon: SiPostman, level: "Intermediate", percentage: 75 }
  ],
  aiml: [
    { name: "PyTorch", icon: SiPytorch, level: "Intermediate", percentage: 65 },
    { name: "TensorFlow", icon: SiTensorflow, level: "Beginner", percentage: 50 },
    { name: "OpenCV", icon: SiOpencv, level: "Intermediate", percentage: 60 },
    { name: "NumPy", icon: SiNumpy, level: "Intermediate", percentage: 75 },
    { name: "Pandas", icon: SiPandas, level: "Intermediate", percentage: 70 }
  ]
};
