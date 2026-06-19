'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getUserProfile } from '@/lib/github';
import { UserProfile } from '../types/types';

interface GithubContextType {
  profile: UserProfile | null;
  loading: boolean;
}

const GithubContext = createContext<GithubContextType>({
  profile: null,
  loading: true,
});

export function GithubProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUserProfile();
        setProfile(userData);
      } catch (error) {
        console.error('Error loading GitHub data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <GithubContext.Provider value={{ profile, loading }}>
      {children}
    </GithubContext.Provider>
  );
}

export function useGithub() {
  return useContext(GithubContext);
}
