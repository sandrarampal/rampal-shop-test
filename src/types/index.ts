export type TUser = {
  username?: string;
  email: string;
  password: string;
};

export type TProduct = {
  _id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export type TCartItem = {
  product: TProduct;
  quantity: number;
};

export type AuthFormState = {
  error: string | null;
  isSuccess: boolean;
  isAdmin?: boolean;
};
