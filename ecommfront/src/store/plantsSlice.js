import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// thunk for plants via paginated api route 
export const getPlants = createAsyncThunk(
    'plants/getAllPlants',
    async (q) => {
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
            // query string here is set a default of limit 10 so we have a consistent limit every time
            const q = '?limit=10&page=1&total=true'
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
        builder.addCase(getPlants.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getPlants.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.value = action.payload

        })
        builder.addCase(getPlants.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
        // reducers for get total plant count 
        builder.addCase(getTotalPlantCount.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getTotalPlantCount.fulfilled, (state, action) => {
            state.status = 'succeded';
            // pulls the starting plant data off the thunk and sets it to value which can still be changed by the other thunk 
            state.value = action.payload.rows
            // sets the count to another key so that it can still be held and refrenced even after more calls are made to change which plants are being returned from get plants 
            state.valueCount = action.payload.count
        })
        builder.addCase(getTotalPlantCount.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })

    }
})



export default plantsSlice.reducer

