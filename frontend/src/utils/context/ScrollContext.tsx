import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import throttle from "lodash.throttle";

interface ScrollContextProps {
  children: ReactNode;
}

const ScrollContext = createContext(0);

export function useScrollContext() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }: ScrollContextProps) {
  const [scrollLevel, setScrollLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      setScrollLevel(winScroll);
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollLevel}>
      {children}
    </ScrollContext.Provider>
  );
}
