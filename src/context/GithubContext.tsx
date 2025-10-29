'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getUserProfile, getUserRepos } from '@/lib/github';
import { UserProfile, Repository } from '../types/types';

// Define types
interface GithubContextType {
  profile: UserProfile | null;
  repos: Repository[];a
  loading: boolean;
}

const GithubContext = createContext<GithubContextType>({
  profile: null,
  repos: [],
  loading: true,
});

export function GithubProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, repoData] = await Promise.all([
          getUserProfile(),
          getUserRepos(),
        ]);
        setProfile(userData);
        setRepos(repoData.filter((repo: Repository) => !repo.fork));
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
