import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { TProduct } from "../types";
import { useStore } from "../zustand/store";

const useProductsQuery = () => {
  const searchQuery = useStore((store) => store.searchQuery);

  return useQuery({
    queryKey: ["products", searchQuery],
    queryFn: async () => {
      const { data } = await axios.get<TProduct[]>(
        `http://localhost:4000/products/?search=${searchQuery}`,
      );
      return data;
    },
    staleTime: 1000 * 60 * 3,
  });
};

export default useProductsQuery;
