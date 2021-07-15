import { useQuery } from "react-query";
import { Section } from "../../types";

import { getVideos } from "../../utils/api";

const useHomePage = () => {
  return useQuery<Section[]>("homepage", getVideos);
};

export default useHomePage;
