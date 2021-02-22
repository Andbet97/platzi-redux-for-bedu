import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', 
  async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');;
    return data;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: []
  },
  reducers: {
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

//export const { /* reducers */ } = usersSlice.actions

export default usersSlice.reducer

export const selectUsers = state => state.users.value
