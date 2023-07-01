import { FC } from "react";

import styles from "./Table.module.css";
import { TableRow } from "./TableRow/TableRow";

type PropsType = {
  data: Array<[string, [number, number, number]]>;
  min: number;
};

export const Table: FC<PropsType> = ({ data, min }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.headCell}>Pair name/market</th>
          <th className={styles.headCell}>First</th>
          <th className={styles.headCell}>Second</th>
          <th className={styles.headCell}>Third</th>
        </tr>
      </thead>
      <tbody>
        {data.map(([title, values]) => (
          <TableRow key={title} title={title} values={values} min={min} />
        ))}
      </tbody>
    </table>
  );
};
