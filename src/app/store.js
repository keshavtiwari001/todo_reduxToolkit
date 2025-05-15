import { configureStore } from '@reduxjs/toolkit'
import getUsersReducer from './features/getAlldata'

export const store = configureStore({
  reducer: {
    users : getUsersReducer,
  },
})