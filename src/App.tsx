import { FC } from "react";

import styles from "./App.module.css";
import Logo from "./assets/img.png";
import { Table } from "./components/Table/Table";
import { FIRST_ENDPOINTS, SECOND_ENDPOINTS, THIRD_ENDPOINTS } from "./Constants";
import { useLongpolling } from "./hooks/useLongpolling";
import { getMinValueFromArrayData } from "./utils/getMinValueFromArrayData";
import { updateData } from "./utils/updateData";

export const App: FC = () => {
  const firstData = useLongpolling(FIRST_ENDPOINTS);
  const secondData = useLongpolling(SECOND_ENDPOINTS);
  const thirdData = useLongpolling(THIRD_ENDPOINTS);

  if (!firstData || !secondData || !thirdData) {
    return (
      <div className={styles.app}>
        <img className={styles.image} src={Logo} alt="logo" />
      </div>
    );
  }

  const allData = updateData(firstData, secondData, thirdData);
  const dataArray = Object.entries(allData);
  const minValue = getMinValueFromArrayData(allData);

  return (
    <div className={styles.app}>
      <img className={styles.image} src={Logo} alt="logo" />
      <Table data={dataArray} min={minValue} />
    </div>
  );
};
