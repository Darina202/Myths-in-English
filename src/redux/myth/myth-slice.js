import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMythology,
  fetchMyth,
  fetchCreature,
  fetchRandomCreature,
} from './myth-operation';

const initialState = {
  mythology: [],
  myth: [],
  creature: [],
  randomC: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const mythologySlice = createSlice({
  name: 'mythology',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchMythology.pending, handlePending)
      .addCase(fetchMythology.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.mythology = payload;
      })
      .addCase(fetchMythology.rejected, handleRejected)
      .addCase(fetchMyth.pending, handlePending)
      .addCase(fetchMyth.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.myth = payload;
      })
      .addCase(fetchMyth.rejected, handleRejected)
      .addCase(fetchCreature.pending, handlePending)
      .addCase(fetchCreature.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.creature = payload;
      })
      .addCase(fetchCreature.rejected, handleRejected)
      .addCase(fetchRandomCreature.pending, handlePending)
      .addCase(fetchRandomCreature.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.randomC = payload;
      })
      .addCase(fetchRandomCreature.rejected, handleRejected);
  },
});

export const mythologyReducer = mythologySlice.reducer;
