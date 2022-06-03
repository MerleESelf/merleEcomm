import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import plantsReducer from './plantsSlice'
import orderReducer from './orderSlice'


const store = configureStore({
    reducer:{
        auth: authReducer, 
        plants: plantsReducer,
        order: orderReducer
    }
})

export default store
export * from "./authSlice";