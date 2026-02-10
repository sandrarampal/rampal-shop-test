import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useAuthContext from "../context/hooks/useAuthContext";

const useChangeDeliveryMutation = (orderId: string) => {
  const queryClient = useQueryClient();
  const { token } = useAuthContext();

  return useMutation({
    mutationFn: async (delivered: boolean) => {
      const response = await axios.put(
        `http://localhost:4000/orders/mark-delivered/${orderId}`,
        { delivered },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};

export default useChangeDeliveryMutation;
