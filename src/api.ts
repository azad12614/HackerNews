import { API_URL, type Types } from "./type";

export async function getFetchData(
  page: number,
  url: string,
): Promise<Types[]> {
  // console.log(url);
  const response = await fetch(`${API_URL}${url}/${page}.json`);
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  // console.log(data[0]);
  return data;
}
