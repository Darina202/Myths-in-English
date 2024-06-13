import Gallery from 'components/Gallery/Gallery';
// import styles from './gallery-page.module.css';
import Navbar from 'components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import MythGallery from 'components/Gallery/MythGallery';
import CreatureGallery from 'components/Gallery/CreatureGallery';
import Creature from 'components/Creature/Creature';

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path=":galleryId/*" element={<MythGallery />} />
        <Route path=":galleryId/:mythId/*" element={<CreatureGallery />} />
        <Route path=":galleryId/:mythId/:creatureId" element={<Creature />} />
      </Routes>
    </div>
  );
};
export default GalleryPage;
