// ./app/routes/store/index.tsx
import { API_URL } from '~/lib/config';

console.log(`The API URL is ${API_URL}`);
export default function Index() {

  return (
    <div className="h-screen bg-slate-700 flex justify-center items-center">
      <h2 className="text-blue-600 font-extrabold text-5xl">Welcome to the store!</h2>
    </div>
  )
}