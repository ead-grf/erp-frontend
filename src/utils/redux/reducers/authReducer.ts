import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserEnterpriseDetail } from "src/models/Auth";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null as User | null,
        enterprise: null as UserEnterpriseDetail | null
    },
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        setUserEnterprise: (state, action: PayloadAction<UserEnterpriseDetail>) => {
            state.enterprise = action.payload
        }
    }
});

export const { setUser, setUserEnterprise } = authSlice.actions;

export default authSlice.reducer;