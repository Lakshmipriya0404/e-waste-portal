// Hook specifically for scroll height
import { useEffect, useState } from "react";

interface ScrollHeightHook {
  getScrollHeight: () => number;
}

export function useGetScrollHeight(): ScrollHeightHook {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScrollHeight = () => {
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollHeight(height);
    };

    handleScrollHeight();

    window.addEventListener("resize", handleScrollHeight);
    window.addEventListener("scroll", handleScrollHeight);

    return () => {
      window.removeEventListener("resize", handleScrollHeight);
      window.removeEventListener("scroll", handleScrollHeight);
    };
  }, []);

  const getScrollHeight = () => {
    return scrollHeight;
  };

  return { getScrollHeight };
}
