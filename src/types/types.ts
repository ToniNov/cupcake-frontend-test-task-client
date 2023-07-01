export type Data = {
  [key: string]: number;
};

export type ArrayData = {
  [key in DataArrayKeys]: [number, number, number];
};

type DataArrayKeys =
  | "RUB/CUPCAKE"
  | "USD/CUPCAKE"
  | "EUR/CUPCAKE"
  | "RUB/USD"
  | "RUB/EUR"
  | "EUR/USD";
