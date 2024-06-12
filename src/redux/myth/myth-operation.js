import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestMythology } from '../../api/myth-api.js';

export const fetchMythology = createAsyncThunk(
  'mythology/fetchAllMythology',
  async (_, thunkAPI) => {
    try {
      const data = await requestMythology();
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
