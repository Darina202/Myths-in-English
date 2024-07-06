import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestCreature,
  requestMyth,
  requestMythology,
  requestRandomCreature,
} from '../../api/myth-api.js';

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

export const fetchMyth = createAsyncThunk(
  'mythology/fetchAllMyth',
  async (id, thunkAPI) => {
    try {
      const data = await requestMyth(id);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCreature = createAsyncThunk(
  'mythology/fetchAllCreature',
  async (mythId, id, thunkAPI) => {
    try {
      const data = await requestCreature(mythId, id);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRandomCreature = createAsyncThunk(
  'mythology/fetchRandomCreature',
  async (_, thunkAPI) => {
    try {
      const data = await requestRandomCreature();
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
