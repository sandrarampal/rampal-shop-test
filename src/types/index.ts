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
