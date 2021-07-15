import { useInfiniteQuery } from "react-query";
import { Category } from "../../types";
import { getCategory } from "../../utils/api";

const useCategory = (slug: string) => {
  const fetchCategory = ({ pageParam = 1 }) => getCategory(slug, pageParam);

  return useInfiniteQuery<Category>(["category", slug], fetchCategory, {
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.nextPage ? lastPage.nextPage : undefined,
  });
};

export default useCategory;
