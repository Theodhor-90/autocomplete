import { configureStore } from '@reduxjs/toolkit'
import { hackerNewsApiSlice } from './api/hackerNewsApiSlice'

const store = configureStore({
    reducer: {
        [hackerNewsApiSlice.reducerPath]: hackerNewsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(hackerNewsApiSlice.middleware),
})

export default store
