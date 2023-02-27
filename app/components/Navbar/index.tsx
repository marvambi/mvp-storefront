// @app/components/Navbar/index.jsx
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";
import type { Key } from "react";
import { redirect } from "@remix-run/router";
import { useNavigate } from "@remix-run/react";

interface NavProps {
  navigationData: any
  currentRoute: string
  setCurrentRoute: (item: string) => void
};
const Navbar = ({ navigationData, currentRoute, setCurrentRoute }: NavProps) => {
  const navigate = useNavigate()
  const setRoute = (item: string) => {
    console.log("Redirecting...")
    history.pushState(null, '', item.toLowerCase())
    redirect(item.toLocaleUpperCase());
    navigate(item.toLowerCase() == "home" ? "/" : item.toLowerCase())

  }
  return (
    <nav className={'hidden md:flex flex-row items-center justify-between px-8 h-18 rounded-b-3xl bg-white'}>
      <span className={'text-5xl text-gray-800 -mb-1'}>
        <CgMonday />
      </span>
      <ul className={'flex flex-row self-end h-12 items-center align-middle justify-between'}>
        {navigationData.map((item: string, index: Key) => (
          <li
            className={classNames([
              'w-auto mx-2 p-1 rounded-md text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide text-sm flex items-start justify-center',
              currentRoute === item && 'text-gray-700 border-b-3 border-gray-700 bg-gradient-to-b from-white to-gray-400',
            ])}
            key={index}
            onClick={() => {
              setCurrentRoute(item)
              setRoute(item.toLowerCase())
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className={'bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-3 px-5 rounded-lg font-medium tracking-wide leading-none'}>Logout</button>
    </nav>
  );
};

export default Navbar;