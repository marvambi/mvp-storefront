// @app/components/Tabbar/index.tsx

import type { Key } from "react";
import { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";

interface Tabprops {
  navigationData: any
  currentRoute: string
  setCurrentRoute: (item: string) => void
};
const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }: Tabprops) => {
  const getTabIcon = useCallback((item: any) => {
    switch (item) {
      case "Home":
        return <AiFillHome />;
      case "Discover":
        return <AiFillCompass />;
      case "Store":
        return <BsFillBagFill />;
      case "Inbox":
        return <CgInbox />;
      case "Profile":
        return <BsFillPersonFill />;
    }
  }, []);

  return (
    <nav className={'flex md:hidden flex-row items-center justify-around px-8 h-18 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl mb-2 py-2'}>
      {navigationData.map((item: any, index: Key | null | undefined) => (
        <span
          key={index}
          className={classNames([
            'text-gray-400 hover:text-gray-700 cursor-pointer w-18 h-full flex items-center justify-center',
            currentRoute === item && 'bg-gradient-to-t from-white to-gray-100 border-t-3 border-gray-700 text-gray-700',
          ])}
          onClick={() => setCurrentRoute(item)}
        >
          <span className={'-mb-1'}>{getTabIcon(item)}</span>
        </span>
      ))}
    </nav>
  );
};

export default Tabbar;