import { isEscapeKey } from "@/utils";
import { useEffect } from "react";

export const useEscapeKeydown = (callback: () => void) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isEscapeKey(event)) {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [callback]);
};