import { Link } from 'react-router-dom';
import Statistic from './Statistic/Statistic';
import styles from './main-page.module.css';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fon}>
        <Statistic />
      </div>

      <h3>List of topics</h3>
      <ul>
        <li>Grammar</li>
        <li>Vocabulary</li>
      </ul>
      <ul>
        <li>
          <Link to="/gallery" className={styles.link}>
            To gallery
          </Link>
        </li>
        <li>
          <Link to="/ex" className={styles.link}>
            To exercises
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MainPage;
