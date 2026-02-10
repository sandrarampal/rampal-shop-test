export type TUser = {
  username?: string;
  email: string;
  password?: string;
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

export type TOrderProduct = {
  productId: string;
  quantity: number;
};

export type TOrder = {
  _id: string;
  products: TOrderProduct[];
  price: number;
  address: string;
  owner: TUser;
};
