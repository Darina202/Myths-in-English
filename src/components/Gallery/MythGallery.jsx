import { useDispatch, useSelector } from 'react-redux';
import styles from './gallery.module.css';
import { useEffect } from 'react';
import { fetchMyth } from '../../redux/myth/myth-operation';
import { selectAllMythology } from '../../redux/myth/myth-selectors';
import { Link, useParams } from 'react-router-dom';

const MythGallery = () => {
  const { myth } = useSelector(selectAllMythology);
  const dispatch = useDispatch();
  const { galleryId } = useParams();

  useEffect(() => {
    dispatch(fetchMyth(galleryId));
  }, [dispatch, galleryId]);

  const elements = myth.map(({ _id, image, myth_name }) => {
    const isDisabled = _id !== '66687216084dd6ed8b9cd295'; /* _id change */
    return (
      <li
        key={_id}
        className={`${styles.thumb} ${isDisabled ? styles.disabled : ''}`}
      >
        <Link
          to={`/gallery/${galleryId}/${_id}`}
          onClick={e => isDisabled && e.preventDefault()}
        >
          <img src={image} alt={myth_name} className={styles.image} />
          <p className={styles.text}>{myth_name}</p>
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
export default MythGallery;
