import { useEffect, useCallback } from "react";

interface useClickOutsideInterface {
  ref: React.RefObject<HTMLDivElement>;
  callback: (newValue: boolean) => void;
}

export const useClickOutside = ({
  ref,
  callback,
}: useClickOutsideInterface) => {
  const handleClickOutside = useCallback(
    (e: MouseEvent): void => {
      if (callback && ref.current && !ref.current.contains(e.target as Node)) {
        callback(false);
      }
    },

    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
};
