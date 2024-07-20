import { useDispatch, useSelector } from 'react-redux';
import styles from './exercise.module.css';
import {
  selectMythError,
  selectMythLoading,
  selectRandomCreature,
} from '../../redux/myth/myth-selectors';
import { useEffect, useState } from 'react';
import icons from '../../img/icons.svg';
import { fetchRandomCreature } from '../../redux/myth/myth-operation';

const Exercise = () => {
  const creature = useSelector(selectRandomCreature);
  const mythLoading = useSelector(selectMythLoading);
  const mythError = useSelector(selectMythError);
  const dispatch = useDispatch();

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    dispatch(fetchRandomCreature());
  }, [dispatch]);

  useEffect(() => {
    if (creature && creature.description) {
      console.log('Creature data:', creature);
      setLanguages(creature.description.map(() => 'eng'));
    }
  }, [creature]);

  const handleLanguageToggle = index => {
    setLanguages(prevLanguages =>
      prevLanguages.map((lang, i) =>
        i === index ? (lang === 'eng' ? 'ua' : 'eng') : lang
      )
    );
  };

  if (!creature || !creature.description) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   console.log('Component mounted');

  //   dispatch(fetchRandomCreature());
  // }, [dispatch]);

  // console.log(creature);
  // const [languages, setLanguages] = useState(
  //   creature?.description.map(() => 'eng') || []
  // );

  // const handleLanguageToggle = index => {
  //   setLanguages(prevLanguages =>
  //     prevLanguages.map((lang, i) =>
  //       i === index ? (lang === 'eng' ? 'ua' : 'eng') : lang
  //     )
  //   );
  //};

  return (
    <div className={styles.container}>
      {mythLoading && <p>Loading in progress</p>}
      <div className={styles.top}>
        <img
          src={creature?.picture}
          alt={creature?.creature_name}
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
              ? creature?.description[0].eng_desc
              : creature?.description[0].ua_desc}
          </p>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dqv2kepyf/image/upload/v1718350690/samples/present_sniw89.jpg"
        alt="present"
        width="360"
        className={styles.image}
      />
      {mythError && <p className={styles.error}>{mythError}</p>}
    </div>
  );
};

export default Exercise;
