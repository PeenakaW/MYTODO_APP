
import { FunctionComponent } from "react";
import styles from "./OpenPage.module.css";
const OpenPage = () => {
  return (
    <div className={styles.openpage}>
      <img className={styles.icon} alt="" src="/App Logo.jpg" />
      <div className={styles.organizeMe}>{`Organize Me `}</div>
    </div>
  );
};

export default OpenPage;
