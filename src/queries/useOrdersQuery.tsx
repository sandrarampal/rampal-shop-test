import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { TOrder } from "../types";

const useOrdersQuery = (token: string | null) =>
  useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data } = await axios.get<TOrder[]>(
        "http://site--rampal-shop-backend--96jcjn4jx467.code.run/orders",
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
