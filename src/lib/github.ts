import type { UserProfile } from '@/types/types';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'indala';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const headers: Record<string, string> = GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {};

export async function getUserProfile(): Promise<UserProfile> {
  try {
    const res = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`, {
      headers,
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    if (!res.ok) {
      console.error(`GitHub API error: ${res.status} ${res.statusText}`);
      throw new Error('Failed to fetch user profile');
    }
    return res.json();
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    throw error;
  }
}
