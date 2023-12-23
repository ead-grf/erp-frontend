import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
    reducer: {
       auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>