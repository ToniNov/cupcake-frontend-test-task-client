import { FC, memo } from "react";

import { formatNumber } from "../../../utils/formatNumber";

import { TableCell } from "./TableCell/TableCell";

type PropsType = {
  title: string;
  values: [number, number, number];
  min: number;
};

export const TableRow: FC<PropsType> = memo(({ title, values, min }) => {
  return (
    <tr>
      <TableCell data={title} />
      {values.map((value) => (
        <TableCell key={value} data={formatNumber(value)} min={min} />
      ))}
    </tr>
  );
});
