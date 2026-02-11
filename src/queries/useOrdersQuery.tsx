import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { TOrder } from "../types";

const useOrdersQuery = (token: string | null) =>
  useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data } = await axios.get<TOrder[]>(
        `${import.meta.env.VITE_API_URL}orders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return data;
    },
    enabled: !!token,
    staleTime: 1000 * 60,
  });

export default useOrdersQuery;
