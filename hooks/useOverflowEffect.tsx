import { useEffect } from "react";

export const useOverflowEffect = (className: string, deps: any[]) => {
  useEffect(() => {
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};