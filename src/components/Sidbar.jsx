import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidbar.module.css";
const Sidbar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of city</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; CopyRight{new Date().getFullYear()} by worldwise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidbar;
