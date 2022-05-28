import axios from 'axios'
import {createSlice} from '@reduxjs/toolkit'

export const plantsSlice = createSlice({
    name: 'allPlants',
    initialState: {
        value: []
    },
    reducers:  {
        fetchPlants: (state = initialState , action) => {
            state.value =  action.payload
        }
    }
})

export const { fetchPlants } = plantsSlice.actions
export default plantsSlice.reducer

//action constants

// const GET_ALL_PLANTS = 'GET_ALL_PLANTS'

// // action creators
// const fetchAllPlants = plants => ({
//     type: GET_ALL_PLANTS,
//     plants
// })

// // thunks
// export const getAllPlants = () => {
//     return async dispatch => {
//         const { data } = await axios.get('/api/plants')
//         const plants = data
//         dispatch(fetchAllPlants(plants))
//     }
// }

// // reducer
// export default function (state = [], action) {
//     switch (action.type) {
//         case GET_ALL_PLANTS:
//             return action.plants
//         default:
//             return state
//     }
// }