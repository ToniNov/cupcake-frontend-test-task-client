import { useEffect, useState } from "react";

type Endpoints = {
  [key: string]: string;
};

type EndpointData = {
  [key: string]: number;
};

const BASE_URL = "http://localhost:3000/api/v1";

export const useLongpolling = ({ path, longpoll }: Endpoints): EndpointData | null => {
  const [data, setData] = useState<EndpointData | null>(null);
  const [isMounted, setIsMounted] = useState<Boolean>(true);

  const fetchDataWithUpdates = async (): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}${path}`);
      const data = await response.json();

      if (isMounted) {
        setData(data.rates);
        await recursiveFunction();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const recursiveFunction = async (): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}${longpoll}`);
      const data = await response.json();

      if (response.ok) {
        setData(data.rates);
        await recursiveFunction();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataWithUpdates();

    return () => {
      setIsMounted(false);
    };
  }, []);

  return data;
};
