// app/utils/types.server.ts
export type RegisterForm = {
  email: string
  password: string
  username: string
  role: string
}

export type LoginForm = {
  email: string
  password: string
}

export type Product = {
  _id: string
  sellerId: string
  productName: string
  amountAvailable: string
  cost: string
  description: string
  createdAt: string
  updatedAt: string
  __v?: number
}