import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import axios from "axios";
import type { TProduct } from "../types";

type TStore = {
  products: TProduct[];
  cartCounter: number;
  increment: () => void;
  decrement: () => void;
  isLoading: boolean;
  error: null | string;
  fetch_products: () => Promise<void>;
};

export const useStore = create<TStore>()(
  devtools(
    immer((set) => {
      return {
        cartCounter: 0,
        increment: () => {
          set(
            (state) => {
              state.cartCounter++;
            },
            false,
            "increment",
          );
        },
        decrement: () => {
          set(
            (state) => {
              state.cartCounter--;
            },
            false,
            "decrement",
          );
        },
        products: [],
        isLoading: true,
        error: null,
        fetch_products: async () => {
          try {
            const { data } = await axios.get<TProduct[]>(
              "http://localhost:4000/products",
            );
            set(
              (state) => {
                state.isLoading = false;
                state.products = data;
              },
              false,
              "fetch_products/fullfilled",
            );
          } catch (error) {
            set(
              (state) => {
                state.isLoading = false;
                if (error instanceof Error) {
                  state.error = error.message;
                } else {
                  state.error = "Une erreur est survenue";
                }
              },
              false,
              "fetch_products/rejected",
            );
          }
        },
      };
    }),
  ),
);
