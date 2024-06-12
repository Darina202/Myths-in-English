import { useDispatch, useSelector } from 'react-redux';
import styles from './gallery.module.css';
import { useEffect } from 'react';
import { fetchMythology } from '../../redux/myth/myth-operation';
import { selectAllMythology } from '../../redux/myth/myth-selectors';

const Gallery = () => {
  const { items } = useSelector(selectAllMythology);
  const dispatch = useDispatch();
  console.log(items);
  useEffect(() => {
    dispatch(fetchMythology());
  }, [dispatch]);

  const elements = items.map(({ _id, image, mythology_name }) => {
    return (
      <li key={_id} className={styles.thumb}>
        <img src={image} alt={mythology_name} className={styles.image} />
        <p className={styles.text}>{mythology_name}</p>
      </li>
    );
  });

  return (
    <div className={styles.myth}>
      <h1 className={styles.title}>Mythologies of the World</h1>
      <ul className={styles.list}>
        {elements}
        {/* <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oMoZTAI38Qv8a0dbrptTIZPrkx5wN1lvc2MG5qBAWg&s"
            alt="Slavic Mythology"
          />
          <p>Slavic Mythology</p>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oMoZTAI38Qv8a0dbrptTIZPrkx5wN1lvc2MG5qBAWg&s"
            alt="Slavic Mythology"
          />
          <p>Greek Mythology</p>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oMoZTAI38Qv8a0dbrptTIZPrkx5wN1lvc2MG5qBAWg&s"
            alt="Slavic Mythology"
          />
          <p>Roman Mythology</p>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oMoZTAI38Qv8a0dbrptTIZPrkx5wN1lvc2MG5qBAWg&s"
            alt="Slavic Mythology"
          />
          <p>Norse Mythology</p>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oMoZTAI38Qv8a0dbrptTIZPrkx5wN1lvc2MG5qBAWg&s"
            alt="Slavic Mythology"
          />
          <p>Japanese Mythology</p>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oMoZTAI38Qv8a0dbrptTIZPrkx5wN1lvc2MG5qBAWg&s"
            alt="Slavic Mythology"
          />
          <p>Egyptian Mythology</p>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oMoZTAI38Qv8a0dbrptTIZPrkx5wN1lvc2MG5qBAWg&s"
            alt="Slavic Mythology"
          />
          <p>Chinese Mythology</p>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oMoZTAI38Qv8a0dbrptTIZPrkx5wN1lvc2MG5qBAWg&s"
            alt="Slavic Mythology"
          />
          <p>Hindu Mythology</p>
        </li> */}
      </ul>
    </div>
  );
};
export default Gallery;
