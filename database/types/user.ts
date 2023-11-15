export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

export enum Status {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

type Address = {
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  phone: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
};

export type UserTypes = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  password: string;
  token: string;
  shipping: Address;
  role: string;
  status: string;
  memories: string[];
  orders: string[];
  cart: string[];
  billing: Address;
};
