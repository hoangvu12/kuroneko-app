import { useQuery } from "react-query";
import { search } from "../../utils/api";

const useSearch = ({ keyword }: { keyword: string }) =>
  useQuery(["search", keyword], () => search(keyword), {
    enabled: false,
  });

export default useSearch;
