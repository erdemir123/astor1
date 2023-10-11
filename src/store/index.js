import { configureStore } from '@reduxjs/toolkit'
import { mainApi } from './services/mainApi'
import mainReducer from "./services/mainSlice"

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    main:mainReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
})