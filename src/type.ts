export interface Types {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  domain?: string;
}

export const API_URL = import.meta.env.VITE_API_URL as string;
