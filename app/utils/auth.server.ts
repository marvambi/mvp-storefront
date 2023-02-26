// app/utils/auth.server.ts
import type { RegisterForm, LoginForm } from './types.server';
import { redirect, json, createCookieSessionStorage, fetch } from '@remix-run/node';
import axios from 'axios';
import { API_URL } from '~/lib/config';

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

export async function login(form: LoginForm) {
  // 2
  console.log("Trying is...")
  const user = await fetch(`${API_URL}/users/login`, { method: "post", body: JSON.stringify({ email: 'marvin@marvin.com', password: 'MarvinAmbrose' }) },);

  // 4
  let me = user.json();
  return me.then((response) => {
    console.log("Returned: ", response);
    return response;
  })

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