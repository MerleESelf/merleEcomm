import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import allPlants from './allPlants'


const store = configureStore({
    reducer:{}
})

export default store
export * from "./auth";