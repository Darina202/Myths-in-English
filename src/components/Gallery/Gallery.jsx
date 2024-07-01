import { useDispatch, useSelector } from 'react-redux';
import styles from './gallery.module.css';
import { useEffect } from 'react';
import { fetchMythology } from '../../redux/myth/myth-operation';
import { selectAllMythology } from '../../redux/myth/myth-selectors';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const { mythology } = useSelector(selectAllMythology);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMythology());
  }, [dispatch]);

  const elements = mythology.map(({ _id, image, mythology_name }) => {
    const isDisabled = _id !== '66687125084dd6ed8b9cd28c';
    return (
      <li
        key={_id}
        className={`${styles.thumb} ${isDisabled ? styles.disabled : ''}`}
      >
        <Link
          to={`/gallery/${_id}`}
          onClick={e => isDisabled && e.preventDefault()}
        >
          <img src={image} alt={mythology_name} className={styles.image} />
          <p className={styles.text}>{mythology_name}</p>
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.myth}>
      <h1 className={styles.title}>Mythologies of the World</h1>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};
export default Gallery;
