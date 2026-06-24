import { 
  FaSpotify, 
  FaTv, 
  FaRobot, 
  FaUserAstronaut, 
  FaChartBar, 
  FaCloudSun 
} from 'react-icons/fa';

export const projects = [
  {
    id: 1,
    title: "Spotify Clone",
    category: "Web",
    icon: FaSpotify,
    shortDescription: "A full-featured Spotify clone with user authentication, custom playlists, player controls, and dynamic lyrics search.",
    description: "Built with the official Spotify Web API, this application replicates the core functionalities of Spotify. Users can log in using their Spotify credentials, search for tracks/artists/albums, control playback devices, view synchronized lyric feeds, and create or share playlists. Features a glassmorphic dashboard mimicking the desktop player experience.",
    techStack: ["React", "Tailwind CSS", "Spotify API", "Node.js", "Express"],
    liveUrl: "https://spotify-clone.kritikakhatri.dev",
    githubUrl: "https://github.com/kritikakhatri/spotify-clone",
    image: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "K-Drama Streaming Platform",
    category: "Web",
    icon: FaTv,
    shortDescription: "A curated Asian drama database and streaming aggregator featuring detailed reviews, rating trackers, and watch party portals.",
    description: "Designed for K-Drama enthusiasts, this site integrates the TMDB API to pull movie/show datasets. Includes Firebase Auth, Firestore to track individual watch lists, a discussion board, rating widgets, and a custom video aggregator. Stylized with a dark neon Cyberpunk aesthetics overlay.",
    techStack: ["React", "Firebase", "TMDB API", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://kdrama-stream.kritikakhatri.dev",
    githubUrl: "https://github.com/kritikakhatri/kdrama-stream",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "AI Chat Application",
    category: "AI/ML",
    icon: FaRobot,
    shortDescription: "An intelligent conversational chatbot helper equipped with custom context parameters, chat histories, and PDF ingestion.",
    description: "Leverages OpenAI's GPT-4 API to build an advanced conversational interface. Includes streaming text responses, voice synthesis output, markdown parsing, syntax highlighting code boxes, and context memory retention. Implements PDF ingestion via LangChain.",
    techStack: ["React", "OpenAI API", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://ai-chat.kritikakhatri.dev",
    githubUrl: "https://github.com/kritikakhatri/ai-chat-assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Developer Portfolio",
    category: "Open Source",
    icon: FaUserAstronaut,
    shortDescription: "A premium glassmorphic, interactive portfolio website featuring dark themes, live APIs integration, and custom utilities.",
    description: "The source code of this portfolio itself. Features 3 custom themes, Ctrl+K command palette, GitHub API repository integration, custom animated counters, responsive layouts, particle systems, interactive LeetCode analytics charts, and EmailJS form verification.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Recharts"],
    liveUrl: "https://kritikakhatri.dev",
    githubUrl: "https://github.com/kritikakhatri/developer-portfolio",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "DSA Visualizer",
    category: "Web",
    icon: FaChartBar,
    shortDescription: "An educational visualizer stepping through sorting, graph search, and tree traversal algorithms in real-time.",
    description: "Built to facilitate learning data structures and algorithms. Users can customize array inputs, adjust execution delays, and step through algorithms (Bubble Sort, Merge Sort, Quick Sort, BFS, DFS, Dijkstra's) with visual animations indicating array access, swaps, and visited states.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Canvas API"],
    liveUrl: "https://dsa-visualizer.kritikakhatri.dev",
    githubUrl: "https://github.com/kritikakhatri/dsa-visualizer",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "Weather Dashboard",
    category: "Clone",
    icon: FaCloudSun,
    shortDescription: "A dynamic weather forecasting dashboard tracking multi-city forecasts, historical charts, and UV/air index levels.",
    description: "Pulls real-time air quality metrics, 7-day reports, and hourly weather metrics using the OpenWeather Map API. Implements detailed tracking charts via Chart.js to render temperature fluctuation gradients, precipitation maps, and storm warning notifications.",
    techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "Axios"],
    liveUrl: "https://weather.kritikakhatri.dev",
    githubUrl: "https://github.com/kritikakhatri/weather-dashboard",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];
