export const API_URL = "https://api.hnpwa.com/v0/";

export interface News {
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

export async function getFetchNews(page: number): Promise<News[]> {
  const response = await fetch(`${API_URL}news/${page}.json`);
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  // console.log(data[0]);
  return data;
}
