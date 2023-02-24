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