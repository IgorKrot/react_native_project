import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPictures = createAsyncThunk("product/fetchPicturesStatus", async(number, {dispatch}) => {
   try {
      const {data} = await axios.get(`https://picsum.photos/v2/list?limit=${number}`);
      number > 1 ? dispatch(setNumberPictures(number)) : null;
      data ? dispatch(setIsLoading(false)) : dispatch(setIsLoading(true));
      return data
   } catch (e) {
      alert(e.response.data.message)   
   }
})

const initialState = {
   pictures: [],
   isLoading: true,
   numberPictures: 5,
   status: "Loading",
};

const dataForPicturesPage = createSlice({
   name: "pictures",
   initialState,

   reducers: {
      setIsLoading: (state, action) => {
         state.isLoading = action.payload;
      },
      setNumberPictures: (state, action) => {
         state.numberPictures = action.payload;
      }
   },
   extraReducers: builder => {
      builder.addCase(fetchPictures.pending, state => {
         state.pictures = [];
         state.status = "Loading";
   })
      builder.addCase(fetchPictures.fulfilled, (state, action) => {
         state.pictures = state.pictures.concat(action.payload);
         state.status = "Success";
   })
      builder.addCase(fetchPictures.rejected, state => {
         state.pictures = [];
         state.status = "Error";
   })
   }
});

export const { setIsLoading, setNumberPictures } = dataForPicturesPage.actions;

export default dataForPicturesPage.reducer;
