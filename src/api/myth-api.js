// import axios from 'axios';
// const baseBackURL = import.meta.env.VITE_BACKEND_URL;

import instance from './auth-api';

// const mythInstance = axios.create({
//   baseURL: 'https://myths-in-english-back.onrender.com/api',
// });

// export const requestMythology = async () => {
//   const { data } = await mythInstance.get(
//     '/mythology/66687125084dd6ed8b9cd28c/myth/66687216084dd6ed8b9cd295/creature'
//   );
//   console.log(data);
//   return data;
// };

export const requestMythology = async () => {
  const { data } = await instance.get('/mythology');
  return data;
};

export const requestMyth = async id => {
  const { data } = await instance.get(`/mythology/${id}/myth`);
  return data;
};

export const requestCreature = async (mythId, id) => {
  const { data } = await instance.get(
    `/mythology/${mythId}/myth/${id}/creature`
  );
  return data;
};
