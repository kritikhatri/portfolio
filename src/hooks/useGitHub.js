import { useState, useEffect } from 'react';
import axios from 'axios';

// Mock data to fall back on if API fails (rate limits, offline, etc.)
const mockGitHubProfile = {
  avatar_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop",
  bio: "B.Tech CSE Student @ NST | Building scalable web solutions & exploring DSA.",
  followers: 48,
  following: 54,
  public_repos: 12,
  stars: 42
};

const mockGitHubRepos = [
  {
    id: 101,
    name: "spotify-clone",
    description: "React-based Spotify player clone powered by the Spotify Web API. Fully functional audio controls.",
    language: "JavaScript",
    stargazers_count: 14,
    forks_count: 3,
    html_url: "https://github.com/kritika-khatri/spotify-clone"
  },
  {
    id: 102,
    name: "kdrama-stream",
    description: "K-Drama streaming tracker catalog integrating TMDB API and Firebase database storage.",
    language: "React",
    stargazers_count: 11,
    forks_count: 2,
    html_url: "https://github.com/kritika-khatri/kdrama-stream"
  },
  {
    id: 103,
    name: "ai-chat-app",
    description: "Real-time AI Chat tool with multi-room backend server socket and OpenAI completion APIs.",
    language: "JavaScript",
    stargazers_count: 8,
    forks_count: 1,
    html_url: "https://github.com/kritika-khatri/ai-chat"
  },
  {
    id: 104,
    name: "dsa-visualizer",
    description: "Interactive visual demonstration of sorting algorithms and graph traversals in React.",
    language: "JavaScript",
    stargazers_count: 6,
    forks_count: 1,
    html_url: "https://github.com/kritika-khatri/dsa-visualizer"
  },
  {
    id: 105,
    name: "weather-dashboard",
    description: "Weather lookup dashboard displaying meteorological graphs with OpenWeather details.",
    language: "JavaScript",
    stargazers_count: 4,
    forks_count: 0,
    html_url: "https://github.com/kritika-khatri/weather-dashboard"
  },
  {
    id: 106,
    name: "nst-hack-finder",
    description: "AI-driven education aggregator tool built for NST Hackathon 2024.",
    language: "Python",
    stargazers_count: 3,
    forks_count: 1,
    html_url: "https://github.com/kritika-khatri/nst-hack-finder"
  }
];

export const useGitHub = (username) => {
  const [data, setData] = useState({ profile: null, repos: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setData({ profile: mockGitHubProfile, repos: mockGitHubRepos });
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const [profileRes, reposRes] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=30`)
        ]);

        // Filter out fork repositories and sort by star count or push date
        const filteredRepos = reposRes.data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setData({
          profile: {
            avatar_url: profileRes.data.avatar_url,
            bio: profileRes.data.bio || mockGitHubProfile.bio,
            followers: profileRes.data.followers,
            following: profileRes.data.following,
            public_repos: profileRes.data.public_repos,
            stars: filteredRepos.reduce((acc, r) => acc + r.stargazers_count, 0)
          },
          repos: filteredRepos.length > 0 ? filteredRepos : mockGitHubRepos
        });
        setError(null);
      } catch (err) {
        console.warn("GitHub API limit exceeded or network error, loading mock profile data.");
        setData({ profile: mockGitHubProfile, repos: mockGitHubRepos });
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { ...data, loading, error };
};
