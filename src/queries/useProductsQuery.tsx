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
        `${import.meta.env.VITE_API_URL}products/?search=${searchQuery}`,
      );
      return data;
    },
    staleTime: 1000 * 60 * 3,
  });
};

export default useProductsQuery;
