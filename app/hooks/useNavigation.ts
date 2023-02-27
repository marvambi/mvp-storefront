import type { SetStateAction } from "react";
import { useState, useCallback } from "react";

const useNavigation = () => {
  const [route, setRoute] = useState("Home");

  const selectAction = useCallback(
    (option: SetStateAction<string>) => {
      if (route === option) return;
      setRoute(option);
    },
    [route]
  );

  return { currentRoute: route, setCurrentRoute: selectAction };
};

export default useNavigation;