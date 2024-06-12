import { nanoid } from 'nanoid';

const menuItems = [
  { id: nanoid(), to: '/home', text: 'Main' },
  { id: nanoid(), to: '/gallery', text: 'Galery' },
  { id: nanoid(), to: '/ex', text: 'Exercises' },
];
export default menuItems;
