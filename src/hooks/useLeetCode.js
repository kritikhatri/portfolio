import { useState, useEffect } from 'react';
import axios from 'axios';

const FALLBACK_LEETCODE = {
  totalSolved: 312,
  totalQuestions: 3180,
  easySolved: 145,
  easyTotal: 820,
  mediumSolved: 135,
  mediumTotal: 1560,
  hardSolved: 32,
  hardTotal: 800,
  acceptanceRate: 64.2,
  ranking: 184203,
  streak: 18,
  recentSubmissions: [
    { id: 1, title: "Two Sum", difficulty: "Easy", status: "Accepted", time: "2 hours ago" },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium", status: "Accepted", time: "1 day ago" },
    { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Accepted", time: "2 days ago" },
    { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", status: "Accepted", time: "3 days ago" },
    { id: 5, title: "Container With Most Water", difficulty: "Medium", status: "Accepted", time: "4 days ago" }
  ]
};

export const useLeetCode = (username) => {
  const [data, setData] = useState({
    stats: null,
    loading: true,
    error: null,
    isFallback: false
  });

  useEffect(() => {
    if (!username) {
      setData({
        stats: FALLBACK_LEETCODE,
        loading: false,
        error: null,
        isFallback: true
      });
      return;
    }

    const fetchLeetCodeData = async () => {
      try {
        // Attempt using the popular public leetcode-stats-api wrapper
        const res = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
        
        if (res.data && res.data.status === "success") {
          setData({
            stats: {
              totalSolved: res.data.totalSolved,
              totalQuestions: res.data.totalQuestions,
              easySolved: res.data.easySolved,
              easyTotal: res.data.totalEasy,
              mediumSolved: res.data.mediumSolved,
              mediumTotal: res.data.totalMedium,
              hardSolved: res.data.hardSolved,
              hardTotal: res.data.totalHard,
              acceptanceRate: res.data.acceptanceRate,
              ranking: res.data.ranking,
              streak: FALLBACK_LEETCODE.streak, // Streak isn't in standard API returns, merge fallback
              recentSubmissions: FALLBACK_LEETCODE.recentSubmissions
            },
            loading: false,
            error: null,
            isFallback: false
          });
        } else {
          throw new Error("LeetCode API returned failure status.");
        }
      } catch (err) {
        console.warn("LeetCode stats fetch failed. Using local mock stats.", err);
        setData({
          stats: FALLBACK_LEETCODE,
          loading: false,
          error: null,
          isFallback: true
        });
      }
    };

    fetchLeetCodeData();
  }, [username]);

  return data;
};
