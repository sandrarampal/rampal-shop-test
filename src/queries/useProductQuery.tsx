import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { TProduct } from "../types";

const useProductQuery = (id: string) =>
  useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const { data } = await axios.get<TProduct>(
        `${import.meta.env.VITE_API_URL}products/${id}`,
      );
      return data;
    },
    staleTime: 1000 * 60 * 3,
  });

export default useProductQuery;
