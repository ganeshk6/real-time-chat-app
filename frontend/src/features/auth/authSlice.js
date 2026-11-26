import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, getMe } from "./authThunks";

const initialState = {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    authChecked: false,
    modalType: 'signin',
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setModalChange: (state, action) => {
            if (!state.isAuthenticated) {
                state.modalType = action.payload;
            }
        },
        clearAuthError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.authChecked = true;
                state.modalType = null;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.modalType = null;
                state.authChecked = true;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getMe.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                state.authChecked = true;
                state.error = null;
            })
            .addCase(getMe.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isAuthenticated = false;
                state.authChecked = true;
                state.user = null;
            });
    },
});

export const {
    setModalChange,
    clearAuthError,
} = authSlice.actions;

export default authSlice.reducer;