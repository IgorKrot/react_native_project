import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getAuth = createAsyncThunk("product/fetchAuthStatus", async() => {
   const {data} = await axios.get(`https://reqres.in/api/users/2`);
         return data;
})

const initialState = {
   user : [],
   isLogin: false,
};

const dataForAuth = createSlice({
   name: "auth",
   initialState,

   reducers: {
      setIsLogin: (state, action) => {
         state.isLogin = action.payload;
      },
   },
   extraReducers: builder => {
      builder.addCase(getAuth.pending, state => {
         state.user = [];
         state.status = "Loading";
   })
      builder.addCase(getAuth.fulfilled, (state, action) => {
         state.user = action.payload;
         state.status = "Success";
   })
      builder.addCase(getAuth.rejected, state => {
         state.user = [];
         state.status = "Error";
   })
   }
});

export const { setIsLogin } = dataForAuth.actions;

export default dataForAuth.reducer;
