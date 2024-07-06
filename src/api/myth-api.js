import instance from './auth-api';

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

export const requestRandomCreature = async () => {
  const { data } = await instance.get('/mythology/random');
  return data;
};
