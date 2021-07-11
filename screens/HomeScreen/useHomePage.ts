import { useQuery } from "react-query";

import { getVideos } from "../../utils/api";

const useHomePage = () => {
  return useQuery("homepage", getVideos);
};

export default useHomePage;
