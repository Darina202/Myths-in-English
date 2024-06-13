import { Link } from 'react-router-dom';
import Statistic from './Statistic/Statistic';
import styles from './main-page.module.css';

const MainPage = () => {
  return (
    <div>
      <div className={styles.fon}>
        <Statistic />
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>List of topics</h3>
        <p className={styles.theme}>Grammar</p>
        <ul className={styles.list}>
          <li>Adjective</li>
          <li>Adverb</li>
          <li>Clause</li>
          <li>Conjunction</li>
          <li>Determiner</li>
          <li>Modality</li>
          <li>Noun</li>
          <li>Phrase</li>
          <li>Preposition</li>
          <li>Pronoun</li>
          <li>Verb</li>
        </ul>
        <p className={styles.theme}>Vocabulary</p>
        <ul className={styles.button}>
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
    </div>
  );
};
export default MainPage;
