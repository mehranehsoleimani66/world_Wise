import { Link } from "react-router-dom";
import styles from "./AppNav.module.css";

const AppNav = () => {
  return (
    <div className={styles.nav}>
      <Link to="/app"> go to the app</Link>
    </div>
  );
};

export default AppNav;
