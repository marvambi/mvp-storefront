// app/routes/login.tsx
import { useEffect, useState } from 'react'
import { FormField } from '~/components/form-field';
import { Layout } from '~/components/layout';
import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node'
import { validateEmail, validateUserName, validatePassword, validateRole } from '~/utils/validators.server';
import { login, register } from '~/utils/auth.server';

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const action = form.get('_action')
  const email = form.get('email')
  const password = form.get('password')
  let username = form.get('username')
  let role = form.get('role')

  if (typeof action !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 })
  }

  if (action === 'register' && (typeof username !== 'string' || typeof username !== 'string')) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 })
  }

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...(action === 'register'
      ? {
        username: validateUserName((username as string) || ''),
        role: validateRole((role as string) || ''),
      }
      : {}),
  }

  if (Object.values(errors).some(Boolean)) {
    return json({ errors, fields: { email, password, username, role }, form: action }, { status: 400 });
  }
  switch (action) {
    case 'login': {
      return await login({ email, password })
    }
    case 'register': {
      username = username as string
      role = role as string
      return await register({ email, password, username, role })
    }
    default:
      return json({ error: `Invalid Form Data` }, { status: 400 });
  }
}

export default function Login() {
  const [action, setAction] = useState('login');
  const [role, setRole] = useState<String>('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    role,
  })

  // Updates the form data when an input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData(form => ({ ...form, [field]: event.target.value }))

  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
    //setFormData(form => ({ ...form, role: event.target.value }));

  }
  useEffect(() => {
    setFormData(form => ({ ...form, role: role }));
  }, [role]);
  useEffect(() => {
    return console.log("New state: ", formData);
  }, [formData]);

  const enableActions = () => {
    let decision = false;
    if (action === 'login') {
      decision = (formData.email == "" || formData.password == "") ? true : false;
    }
    if (action === 'register') {
      decision = (formData.email == "" || formData.password == "" || formData.username == "" || formData.role == "") ? true : false;
    }
    return decision;
  };
  const determine = enableActions();

  return (
    <Layout>
      <div className="h-full justify-center items-center flex flex-col gap-y-4">
        <button
          onClick={() => setAction(action == 'login' ? 'register' : 'login')}
          className="absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
        >
          {action === 'login' ? 'Sign Up' : 'Sign In'}
        </button>
        <h2 className="text-5xl font-extrabold text-yellow-300">Vender...</h2>
        <p className="font-semibold text-slate-300">
          {action === 'login' ? 'Log In To Buy/Sell Some Gizmos!' : 'Sign Up To Get Started!'}
        </p>

        <form method="post" className="rounded-2xl bg-gray-200 p-6 w-96">

          <FormField
            label='Email'
            type='email'
            htmlFor="email"
            value={formData.email}
            onChange={e => handleInputChange(e, 'email')}
          />

          <FormField
            label='Password'
            type="password"
            htmlFor="password"
            value={formData.password}
            onChange={e => handleInputChange(e, 'password')}
          />
          {action === 'register' && (
            <>
              <FormField
                htmlFor="username"
                type='text'
                label="Username"
                onChange={(e) => handleInputChange(e, 'username')}
                value={formData.username}
              />

              <select className="w-half p-2 rounded-xl my-2 items-center"
                onChange={(e) => {
                  e.target.value !== "" && handleSelectChange(e)
                }}
              >
                <option className="text-blue-600 font-semibold mt-5" value="">Select a role</option>
                <option className="text-blue-600 font-semibold mt-5" key={'seller'} value={'seller'}>
                  {'Seller'}
                </option>
                &nbsp;&nbsp;
                <option className="text-blue-600 font-semibold mt-5" key={'buyer'} value={'buyer'}>
                  {'Buyer'}
                </option>
              </select>
            </>
          )}
          <div className="w-full text-center">
            <button disabled={determine} type="submit" name="_action" value={action} className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1 mt-5">
              {
                action === 'login' ? "Sign In" : "Sign Up"
              }
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}