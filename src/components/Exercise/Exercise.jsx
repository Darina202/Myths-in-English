import { useSelector } from 'react-redux';
import styles from './exercise.module.css';
import { selectAllMythology } from '../../redux/myth/myth-selectors';
import { useState } from 'react';
import icons from '../../img/icons.svg';

const Exercise = () => {
  const { creature } = useSelector(selectAllMythology);

  const [languages, setLanguages] = useState(
    creature[0].description.map(() => 'eng')
  );

  const handleLanguageToggle = index => {
    setLanguages(prevLanguages =>
      prevLanguages.map((lang, i) =>
        i === index ? (lang === 'eng' ? 'ua' : 'eng') : lang
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img
          src={creature[0].picture}
          alt={creature[0].creature_name}
          className={styles.image}
        />
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
              ? creature[0].description[0].eng_desc
              : creature[0].description[0].ua_desc}
          </p>
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/dqv2kepyf/image/upload/v1718350690/samples/present_sniw89.jpg"
        alt="pesent"
        width="360"
        className={styles.image}
      />
    </div>
  );
};

export default Exercise;
