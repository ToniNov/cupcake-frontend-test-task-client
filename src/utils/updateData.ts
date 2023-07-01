import { ArrayData, Data } from "../types/types";

export const updateData = (
  firstData: Data,
  secondData: Data,
  thirdData: Data,
): ArrayData => {
  return {
    "RUB/CUPCAKE": [firstData.RUB, secondData.RUB, thirdData.RUB],
    "USD/CUPCAKE": [firstData.USD, secondData.USD, thirdData.USD],
    "EUR/CUPCAKE": [firstData.EUR, secondData.EUR, thirdData.EUR],
    "RUB/USD": [
      firstData.RUB / firstData.USD,
      secondData.RUB / secondData.USD,
      thirdData.RUB / thirdData.USD,
    ],
    "RUB/EUR": [
      firstData.RUB / firstData.EUR,
      secondData.RUB / secondData.EUR,
      thirdData.RUB / thirdData.EUR,
    ],
    "EUR/USD": [
      firstData.USD / firstData.EUR,
      secondData.USD / secondData.EUR,
      thirdData.USD / thirdData.EUR,
    ],
  };
};
