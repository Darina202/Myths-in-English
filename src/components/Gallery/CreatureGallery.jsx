import { useDispatch, useSelector } from 'react-redux';
import styles from './gallery.module.css';
import { useEffect } from 'react';
import { fetchCreature } from '../../redux/myth/myth-operation';
import { selectAllMythology } from '../../redux/myth/myth-selectors';
import { Link, useParams } from 'react-router-dom';
import {
  selectMythError,
  selectMythLoading,
} from '../../redux/myth/myth-selectors';

const CreatureGallery = () => {
  const { creature } = useSelector(selectAllMythology);
  const mythLoading = useSelector(selectMythLoading);
  const mythError = useSelector(selectMythError);
  const dispatch = useDispatch();
  const { galleryId } = useParams();
  const { mythId } = useParams();

  useEffect(() => {
    dispatch(fetchCreature(galleryId, mythId));
  }, [dispatch, galleryId, mythId]);

  const elements = creature.map(({ _id, image, creature_name }) => {
    return (
      <li key={_id} className={styles.thumb}>
        <Link to={`/gallery/${galleryId}/${mythId}/${_id}`}>
          <img src={image} alt={creature_name} className={styles.image} />
          <p className={styles.text}>{creature_name}</p>
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.myth}>
      <h1 className={styles.title}>Mythologies of the World</h1>
      {mythLoading && <p>Loading in progres</p>}
      <ul className={styles.list}>{elements}</ul>
      {mythError && <p className={styles.error}>{mythError}</p>}
    </div>
  );
};
export default CreatureGallery;
