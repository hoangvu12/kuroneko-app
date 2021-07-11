import { useQuery } from "react-query";
import { getVideo } from "../../utils/api";

const useAnimeVideo = ({ slug }: { slug: string }) => {
  return useQuery(["anime-video", slug], () => getVideo(slug));
};

export default useAnimeVideo;
