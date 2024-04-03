import { RefObject, useEffect } from "react";

type Handler = (event: MouseEvent) => void;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  callback: Handler,
  ref: RefObject<T>,
): void {
  useEffect(() => {
    const handleEvent = (event: MouseEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      callback(event);
    };

    document.addEventListener("mousedown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  }, [callback, ref]);
}