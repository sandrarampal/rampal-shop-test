import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import type { TProduct } from "../types";

type TCartItem = {
  product: TProduct;
  quantity: number;
};

type TStore = {
  cartItems: TCartItem[];
  cartCounter: number;
  totalPrice: number;
  addToCart: (product: TProduct) => void;
  removeFromCart: (productId: string) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
  getProductQuantity: (productId: string) => number;
};

export const useStore = create<TStore>()(
  devtools(
    persist(
      immer((set, get) => {
        return {
          cartItems: [],
          cartCounter: 0,
          totalPrice: 0,

          addToCart: (product: TProduct) => {
            set(
              (state) => {
                const existingItem = state.cartItems.find(
                  (item) => item.product._id === product._id,
                );

                if (existingItem) {
                  existingItem.quantity++;
                } else {
                  state.cartItems.push({ product, quantity: 1 });
                }

                state.cartCounter++;
                state.totalPrice += product.price;
              },
              false,
              "addToCart",
            );
          },

          removeFromCart: (productId: string) => {
            set(
              (state) => {
                const itemIndex = state.cartItems.findIndex(
                  (item) => item.product._id === productId,
                );

                if (itemIndex !== -1) {
                  const item = state.cartItems[itemIndex];
                  state.cartCounter -= item.quantity;
                  state.totalPrice -= item.product.price * item.quantity;
                  state.cartItems.splice(itemIndex, 1);
                }
              },
              false,
              "removeFromCart",
            );
          },

          incrementQuantity: (productId: string) => {
            set(
              (state) => {
                const item = state.cartItems.find(
                  (item) => item.product._id === productId,
                );

                if (item) {
                  item.quantity++;
                  state.cartCounter++;
                  state.totalPrice += item.product.price;
                }
              },
              false,
              "incrementQuantity",
            );
          },

          decrementQuantity: (productId: string) => {
            set(
              (state) => {
                const item = state.cartItems.find(
                  (item) => item.product._id === productId,
                );

                if (item && item.quantity > 0) {
                  item.quantity--;
                  state.cartCounter--;
                  state.totalPrice -= item.product.price;

                  if (item.quantity === 0) {
                    const itemIndex = state.cartItems.findIndex(
                      (cartItem) => cartItem.product._id === productId,
                    );
                    state.cartItems.splice(itemIndex, 1);
                  }
                }
              },
              false,
              "decrementQuantity",
            );
          },

          getProductQuantity: (productId: string) => {
            const item = get().cartItems.find(
              (item) => item.product._id === productId,
            );
            return item ? item.quantity : 0;
          },
        };
      }),
      {
        name: "cart-storage",
        partialize: (state) => ({
          cartItems: state.cartItems,
          cartCounter: state.cartCounter,
          totalPrice: state.totalPrice,
        }),
      },
    ),
  ),
);
