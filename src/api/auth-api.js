import axios from 'axios';
// const baseBackURL = import.meta.env.VITE_BACKEND_URL;

const authInstance = axios.create({
  baseURL: 'https://myths-in-english-back.onrender.com/api',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const requestSingup = async body => {
  const { data } = await authInstance.post('/users/register', body);
  setToken(data.token);
  return data;
};

export const requestLogin = async body => {
  const { data } = await authInstance.post('/users/login', body);
  setToken(data.token);
  return data;
};

export const requestCurrentUser = async token => {
  setToken(token);
  try {
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const requestLogout = async token => {
  const { data } = await authInstance.post('/users/logout');
  setToken();
  return data;
};

export default authInstance;
