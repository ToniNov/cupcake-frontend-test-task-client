import { FC, memo } from "react";

import styles from "./TableCell.module.css";

type PropsType = {
  data: string;
  min?: number;
};

export const TableCell: FC<PropsType> = memo(({ data, min }) => {
  return (
    <td
      className={
        !min || min !== Number(data) ? styles.cell : `${styles.cell} ${styles.highlight}`
      }
    >
      {data}
    </td>
  );
});
