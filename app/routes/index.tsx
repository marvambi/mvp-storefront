// ./app/routes/index.tsx
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"
                alt="Store front"
              />
              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-green-600 drop-shadow-md">
                  Vender Store
                </span>
              </h1>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div>&nbsp;</div>
              </div>
              <a href="javascript::">
                <img
                  src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                  alt="Remix"
                  className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem] drop-shadow-md"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl text-center flex-row">
          <Link to="/store" className="text-xl text-blue-600 underline">MVPStore</Link>
          <Link to="/login" className="text-xl text-blue-600 underline mx-10">Login</Link>
        </div>

      </div>
    </main>
  );
}
