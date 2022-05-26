import { configureStore } from '@reduxjs/toolkit'
import user from './user'
import allPlants from './allPlants'


const store = configureStore({
    reducer:{}
})

export default store
// export * from './user'