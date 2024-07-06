import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { mythologyReducer } from './myth/myth-slice';
import authReducer from './auth/auth-slice';

const persistConfig = {
  key: 'user-token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  mythology: mythologyReducer,
});

export default rootReducer;
