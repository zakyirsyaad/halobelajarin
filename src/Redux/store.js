import { configureStore } from '@reduxjs/toolkit'
import authReducer, { initializeAuthState } from '@/Redux/features/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

store.dispatch(initializeAuthState());