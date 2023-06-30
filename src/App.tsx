import { FC } from "react";

import styles from "./App.module.css";
import Logo from "./assets/img.png";

export const App: FC = () => {
  return (
    <div className={styles.App}>
      <img src={Logo} alt="logo" />
    </div>
  );
};
