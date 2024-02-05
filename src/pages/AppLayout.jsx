import Map from "../components/Map";
import Sidbar from "../components/Sidbar";
import styles from "./AppLayout.module.css";
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidbar />
      <Map />
    </div>
  );
};

export default AppLayout;
