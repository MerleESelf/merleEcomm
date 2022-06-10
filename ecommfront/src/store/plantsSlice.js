import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// thunk for plants via paginated api route 
export const getAllPlants = createAsyncThunk(
    'plants/getAllPlants',
    async () => {
        try {
            const { data } = await axios.get(`/api/plant`)
            const plants = data
            return plants
        } catch (err) {
            console.log(err)
        }

    })

// thunk for total number of plants in DB via paginated api route 
export const getTotalPlantCount = createAsyncThunk(
    'plants/getTotalPlantCount',
    async () => {
        try {
            const q = '?limit=0&page=1&total=true'
            const { data } = await axios.get(`/api/plant${q}`)
            return data
        } catch (err) {
            console.log(err)
        }

    })


export const plantsSlice = createSlice({
    name: 'allPlants',
    initialState: {
        value: [],
        valueCount: 0,
        status: 'idle',
        error: null
    },
    reducers: {
    },
    extraReducers(builder) {
        //reducers for all plants 
        builder.addCase(getAllPlants.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getAllPlants.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.value = action.payload
            // state.valueCount = action.payload.length
        })
        builder.addCase(getAllPlants.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
        // reducers for get total plant count 
        builder.addCase(getTotalPlantCount.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getTotalPlantCount.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.valueCount = action.payload
        })
        builder.addCase(getTotalPlantCount.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })

    }
})



export default plantsSlice.reducer

