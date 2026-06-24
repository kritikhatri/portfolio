import { useState, useEffect } from 'react';
import axios from 'axios';

const FALLBACK_PROFILE = {
  avatar_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
  bio: "B.Tech CSE Student @ Newton School of Technology | Aspiring Software Engineer | Building tech solutions that impact lives.",
  followers: 45,
  following: 56,
  public_repos: 14,
  total_stars: 38
};

const FALLBACK_REPOS = [
  {
    id: 1,
    name: "spotify-clone",
    description: "Full-featured Spotify clone with user authentication, custom playlists, player controls, and dynamic lyrics search.",
    language: "JavaScript",
    stargazers_count: 12,
    forks_count: 4,
    html_url: "https://github.com/kritikakhatri/spotify-clone"
  },
  {
    id: 2,
    name: "kdrama-stream",
    description: "Curated K-Drama streaming platform aggregating titles and tracking watcher watchlists using TMDB API and Firebase.",
    language: "JavaScript",
    stargazers_count: 9,
    forks_count: 2,
    html_url: "https://github.com/kritikakhatri/kdrama-stream"
  },
  {
    id: 3,
    name: "ai-chat-assistant",
    description: "Sleek chatbot workspace integrating GPT-4, OpenAI streams, text-to-speech, and vector database document indexers.",
    language: "JavaScript",
    stargazers_count: 7,
    forks_count: 1,
    html_url: "https://github.com/kritikakhatri/ai-chat-assistant"
  },
  {
    id: 4,
    name: "dsa-visualizer",
    description: "Interactive pathfinder and sorting algorithm visualizer with step-by-step canvas graph renderings.",
    language: "JavaScript",
    stargazers_count: 6,
    forks_count: 3,
    html_url: "https://github.com/kritikakhatri/dsa-visualizer"
  },
  {
    id: 5,
    name: "weather-dashboard",
    description: "Weather analytics console presenting hourly changes, charts, and forecasts via Chart.js and OpenWeather.",
    language: "JavaScript",
    stargazers_count: 4,
    forks_count: 0,
    html_url: "https://github.com/kritikakhatri/weather-dashboard"
  },
  {
    id: 6,
    name: "developer-portfolio",
    description: "Interactive dark-mode developer portfolio with customized themes, terminal commands, and analytics integrations.",
    language: "JavaScript",
    stargazers_count: 5,
    forks_count: 1,
    html_url: "https://github.com/kritikakhatri/developer-portfolio"
  }
];

export const useGitHub = (username) => {
  const [data, setData] = useState({
    profile: null,
    repos: [],
    loading: true,
    error: null,
    isFallback: false
  });

  useEffect(() => {
    if (!username) {
      setData({
        profile: FALLBACK_PROFILE,
        repos: FALLBACK_REPOS,
        loading: false,
        error: null,
        isFallback: true
      });
      return;
    }

    const fetchGitHubData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
        ]);

        const repos = reposRes.data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        const totalStars = reposRes.data.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        setData({
          profile: {
            ...profileRes.data,
            total_stars: totalStars
          },
          repos,
          loading: false,
          error: null,
          isFallback: false
        });
      } catch (err) {
        console.warn("GitHub API rate limit exceeded or user not found. Falling back to static mock data.", err);
        // Fallback to beautiful default mock profiles so application never breaks
        setData({
          profile: FALLBACK_PROFILE,
          repos: FALLBACK_REPOS,
          loading: false,
          error: null,
          isFallback: true
        });
      }
    };

    fetchGitHubData();
  }, [username]);

  return data;
};
