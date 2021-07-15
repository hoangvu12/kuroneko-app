import axios from "axios";

import { Category, Section, VideoInfo } from "../types";

const BASE_URL = "https://kuroineko.glitch.me/api/v1/anime";

export const getVideos = async () => {
  const URL = BASE_URL;

  return doRequest<Section[]>(URL);
};

export const getCategory = async (categorySlug: string, page: number = 1) => {
  const URL = `${BASE_URL}/category/${categorySlug}?page=${page}`;

  return doRequest<Category>(URL);
};

export const getVideo = async (animeSlug: string) => {
  const URL = `${BASE_URL}/${animeSlug}`;

  return doRequest<VideoInfo>(URL);
};

const doRequest = async <T>(URL: string): Promise<T> => {
  const { data } = await axios.get(URL);

  return data.data;
};
