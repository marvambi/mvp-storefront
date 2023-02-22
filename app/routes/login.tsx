// app/routes/login.tsx
import { useEffect, useState } from 'react'
import { Layout } from '~/components/layout'
import { FormField } from '~/components/form-field'

export default function Login() {
  const [action, setAction] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    role: '',
  })

  // Updates the form data when an input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    console.log("Form vals: ", formData);
    setFormData(form => ({ ...form, [field]: event.target.value }))

  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Form vals: ", formData);
    setFormData(form => ({ ...form, role: event.target.value }));
  }


  return (
    <Layout>
      <div className="h-full justify-center items-center flex flex-col gap-y-4">
        <button
          onClick={() => setAction(action == 'login' ? 'register' : 'login')}
          className="absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
        >
          {action === 'login' ? 'Sign Up' : 'Sign In'}
        </button>
        <h2 className="text-5xl font-extrabold text-yellow-300">Welcome to Vender!</h2>
        <p className="font-semibold text-slate-300">
          {action === 'login' ? 'Log In To Buy/Sell Some Gizmos!' : 'Sign Up To Get Started!'}
        </p>

        <form method="post" className="rounded-2xl bg-gray-200 p-6 w-96">
          <label htmlFor={'email'} className="text-blue-600 font-semibold">
            Email
          </label><br></br>
          <input
            name="email"
            value={formData.email}
            className="w-full p-2 rounded-xl my-2"
            onChange={e => handleInputChange(e, 'email')}
          /><br></br>
          <label htmlFor={'password'} className="text-blue-600 font-semibold">
            Password
          </label><br></br>
          <input
            type="password"
            name="password"
            value={formData.password}
            className="w-full p-2 rounded-xl my-2"
            onChange={e => handleInputChange(e, 'password')}
          />
          {action === 'register' && (
            <>
              <label htmlFor={'username'} className="text-blue-600 font-semibold">
                Username
              </label><br></br>
              <input
                name="username"
                type="text"
                className="w-full p-2 rounded-xl my-2"
                onChange={e => handleInputChange(e, 'username')}
                value={formData.username}
              /><br></br>
              <p className="text-blue-600 font-semibold mt-5">
                <label htmlFor={'role'} className="text-blue-600 font-semibold">
                  Select a Role 👉
                </label>&nbsp;&nbsp;
                <label>
                  <input onChange={(e) => handleSelectChange(e)} type="radio" name="role" defaultChecked={true} value={formData.role} />
                  Seller
                </label>&nbsp;&nbsp;
                <label>
                  <input onChange={(e) => handleSelectChange(e)} type="radio" name="role" value={formData.role} />
                  Buyer
                </label>
              </p>
            </>
          )}
          <div className="w-full text-center">
            <button type="submit" name="_action" value={action} className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1 mt-5">
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