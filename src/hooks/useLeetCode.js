import { useState, useEffect } from 'react';
import axios from 'axios';

const mockLeetCodeData = {
  totalSolved: 312,
  easySolved: 148,
  mediumSolved: 132,
  hardSolved: 32,
  totalQuestions: 3200,
  easyQuestions: 800,
  mediumQuestions: 1600,
  hardQuestions: 800,
  acceptanceRate: 64.8,
  ranking: 134250,
  streak: 22,
  recentSubmissions: [
    { title: "Two Sum", lang: "C++", status: "Accepted", time: "2 hours ago" },
    { title: "Merge Sorted Array", lang: "C++", status: "Accepted", time: "1 day ago" },
    { title: "Binary Tree Level Order Traversal", lang: "JavaScript", status: "Accepted", time: "3 days ago" },
    { title: "Longest Substring Without Repeating Characters", lang: "JavaScript", status: "Accepted", time: "4 days ago" },
    { title: "LRU Cache", lang: "C++", status: "Accepted", time: "5 days ago" }
  ]
};

export const useLeetCode = (username) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setData(mockLeetCodeData);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        // Call a public LeetCode statistics API wrapper
        const res = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
        
        if (res.data && res.data.status === "success") {
          setData({
            totalSolved: res.data.totalSolved,
            easySolved: res.data.easySolved,
            mediumSolved: res.data.mediumSolved,
            hardSolved: res.data.hardSolved,
            totalQuestions: res.data.totalQuestions,
            easyQuestions: res.data.totalQuestions, // fallback references
            mediumQuestions: res.data.mediumQuestions,
            hardQuestions: res.data.hardQuestions,
            acceptanceRate: res.data.acceptanceRate,
            ranking: res.data.ranking,
            streak: mockLeetCodeData.streak, // Leetcode API doesn't expose streak, fallback to mock
            recentSubmissions: mockLeetCodeData.recentSubmissions
          });
          setError(null);
        } else {
          throw new Error("Invalid response status");
        }
      } catch (err) {
        console.warn("LeetCode Stats API offline, using mock stats.");
        setData(mockLeetCodeData);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { data, loading, error };
};
