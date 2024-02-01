import { useEffect, useState } from "react";
import { APIResponse } from "../types/interface";

export const useFetch = (word: string) => {
  const [isData, setIsData] = useState<APIResponse | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
        );

        if (!response.ok) {
          setIsError(true);
          return;
        }

        const data = await response.json();

        data.length > 0 ? setIsData(data[0]) : setIsError(true);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      setIsLoading(true);
      setIsData(null);
      setIsError(false);
    };
  }, [word]);

  return { isLoading, isData, isError };
};
