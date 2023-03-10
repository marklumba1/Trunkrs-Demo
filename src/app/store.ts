import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/api/api";
import userSliceReducer from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch