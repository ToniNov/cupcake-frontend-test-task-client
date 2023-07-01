import { ArrayData } from "../types/types";

export const getMinValueFromArrayData = (data: ArrayData): number => {
  return Number(Math.min(...Object.values(data).flat()).toFixed(2));
};
