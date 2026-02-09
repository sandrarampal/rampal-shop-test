import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { TProduct } from "../types";

const useProductQuery = (id: string) =>
  useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const { data } = await axios.get<TProduct>(
        `http://localhost:4000/products/${id}`,
      );
      return data;
    },
    staleTime: 1000 * 60 * 3,
  });

export default useProductQuery;
