import { useEffect } from "react";

function useInterval(list, activeIndex, onSelect) {
  useEffect(() => {
    const interval = setInterval(
      () =>
        onSelect(() => {
          return (activeIndex + 1) % list.length;
        }),
      5000,
    );
    return () => clearInterval(interval);
  }, [activeIndex, list.length, onSelect]);
}

export default useInterval;
