import axios from "axios";

const BASE_URL = "https://kuroineko.glitch.me/api/v1/anime";

export const getVideos = async () => {
  const URL = BASE_URL;

  return doRequest(URL);
};

export const getCategory = async (categorySlug) => {
  const URL = `${BASE_URL}/category/${categorySlug}`;

  return doRequest(URL);
};

const doRequest = async (URL) => {
  const { data } = await axios.get(URL);

  return data.data;
};
