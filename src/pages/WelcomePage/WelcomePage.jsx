import { Link } from 'react-router-dom';
import styles from './welcome-page.module.css';
const WelcomePage = () => {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.title}>Welcome!</h1>
      <div className={styles.btn}>
        <div className={styles.link}>
          <Link to="/register">Register</Link>
        </div>
        <div className={styles.link}>
          <Link to="/register">Login</Link>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
