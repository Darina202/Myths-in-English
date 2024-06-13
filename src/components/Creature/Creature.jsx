import { useDispatch, useSelector } from 'react-redux';
import styles from './creature.module.css';
import { useEffect, useState } from 'react';
import { fetchCreature } from '../../redux/myth/myth-operation';
import { selectAllMythology } from '../../redux/myth/myth-selectors';
import { useParams } from 'react-router-dom';
import icons from '../../img/icons.svg';
import Questions from './Question/Question';

const Creature = () => {
  const { creature } = useSelector(selectAllMythology);
  const dispatch = useDispatch();
  const { galleryId } = useParams();
  const { mythId } = useParams();
  const { creatureId } = useParams();

  const legend = creature.find(item => item._id === creatureId);
  const { creature_name, picture, description, test } = legend;

  const [languages, setLanguages] = useState(description.map(() => 'eng'));

  const handleLanguageToggle = index => {
    setLanguages(prevLanguages =>
      prevLanguages.map((lang, i) =>
        i === index ? (lang === 'eng' ? 'ua' : 'eng') : lang
      )
    );
  };

  useEffect(() => {
    dispatch(fetchCreature(galleryId, mythId));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={picture} alt={creature_name} className={styles.image} />
        <div className={styles.descr}>
          <button
            className={styles.btn}
            onClick={() => handleLanguageToggle(0)}
          >
            <svg className={styles.icon}>
              <use href={`${icons}#icon-btn`}></use>
            </svg>
          </button>
          <p className={styles.text}>
            {languages[0] === 'eng'
              ? description[0].eng_desc
              : description[0].ua_desc}
          </p>
        </div>
      </div>
      <div className={styles.descr}>
        <button className={styles.btn} onClick={() => handleLanguageToggle(1)}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-btn`}></use>
          </svg>
        </button>
        <p className={styles.text}>
          {languages[1] === 'eng'
            ? description[1].eng_desc
            : description[1].ua_desc}
        </p>
      </div>
      <h1 className={styles.test}>Confirmation questions</h1>
      <Questions test={test} />
    </div>
  );
};
export default Creature;
