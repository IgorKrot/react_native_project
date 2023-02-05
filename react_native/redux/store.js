import { configureStore } from '@reduxjs/toolkit'
import pictures from './slices/picturesSlice'
import auth from './slices/authSlice'

export const store = configureStore({
reducer: {
   pictures,
   auth,
},
})