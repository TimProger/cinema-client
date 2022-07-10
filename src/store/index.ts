import { configureStore } from '@reduxjs/toolkit'
import reducer from './slices/root';

export const store = configureStore({
    reducer,
    devTools: true
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch