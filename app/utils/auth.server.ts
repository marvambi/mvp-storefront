// app/utils/auth.server.ts
import type { RegisterForm, LoginForm } from './types.server';
import { redirect, json, createCookieSessionStorage } from '@remix-run/node';

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'kudos-session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function register(user: RegisterForm) {
  const exists = { email: user.email };
  if (exists) {
    return json({ error: `User already exists with that email` }, { status: 400 })
  }
}

export async function login({ email, password }: LoginForm) {
  // 2
  const user = ({ email, id: 2 })

  // 3
  if (!user)
    return json({ error: `Incorrect login` }, { status: 400 })

  // 4
  return { id: user.id, email }
}

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession()
  session.set('userId', userId)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  })
}