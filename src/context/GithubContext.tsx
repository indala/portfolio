'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getUserProfile, getUserRepos } from '@/lib/github';

// Define types
interface GithubContextType {
  profile: any | null;
  repos: any[];
  loading: boolean;
}

const GithubContext = createContext<GithubContextType>({
  profile: null,
  repos: [],
  loading: true,
});

export function GithubProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<any | null>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, repoData] = await Promise.all([
          getUserProfile(),
          getUserRepos(),
        ]);
        setProfile(userData);
        setRepos(repoData.filter((repo: any) => !repo.fork));
      } catch (error) {
        console.error('Error loading GitHub data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <GithubContext.Provider value={{ profile, repos, loading }}>
      {children}
    </GithubContext.Provider>
  );
}

export function useGithub() {
  return useContext(GithubContext);
}
