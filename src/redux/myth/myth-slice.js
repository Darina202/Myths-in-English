import { createSlice } from '@reduxjs/toolkit';
import { fetchMythology } from './myth-operation';

const initialState = {
  items: [],
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
        state.items = payload;
      })
      .addCase(fetchMythology.rejected, handleRejected);
  },
});

export const mythologyReducer = mythologySlice.reducer;
