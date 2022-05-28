import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import plantsReducer from './plantsSlice'


const store = configureStore({
    reducer:{
        auth: authReducer, 
        plants: plantsReducer
    }
})

export default store
export * from "./authSlice";