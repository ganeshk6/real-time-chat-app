import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    modalType: 'signin',
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
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.modalType = null;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.modalType = 'signin';
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const {
    setModalChange,
    loginSuccess,
    logout,
    setLoading,
} = authSlice.actions;

export default authSlice.reducer;