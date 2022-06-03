import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// thunks
export const getAllPlants = createAsyncThunk(
    'plants/getAllPlants',
    async () => {
        try {
            const { data } = await axios.get('/api/plants')
            const plants = data
            return plants
        } catch (err) {
            console.log(err)
        }

    })

export const plantsSlice = createSlice({
    name: 'allPlants',
    initialState: {
        value: [],
        status: 'idle',
        error: null
    },
    reducers: {
        fetchPlants: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getAllPlants.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(getAllPlants.fulfilled, (state, action) => {
            state.status = 'succeded'
            return action.payload
        })
        builder.addCase(getAllPlants.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })

    }
})



export const { fetchPlants } = plantsSlice.actions
export default plantsSlice.reducer

