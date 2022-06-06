import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CartDetail from '../../../server/db/models/CartDetail';

export const removedPlantThunk = createAsyncThunk(
    'order/removePlant',
    async (plantToRemove) => {
        try {
            const { userId, orderId, plantId } = plantToRemove
            const { data: order } = await axios.delete(
                `/api/order/${userId}/${orderId}/${plantId}`
            )
            return order
        } catch (error) {
            console.error(error);
        }
    })

export const updateCartAdd = createAsyncThunk(
    'order/updateCartAdd',
    async cartDetails => {
        try {
            const { userId, plantId } = cartDetails
            const { data: cartDetailsPlant } = await axios.get(
                `/api/order/${userId}/${plantId}`
            );
            return cartDetailsPlant
        } catch (error) {
            console.error(error);
        }
    })


export const fetchCompleteOrder = createAsyncThunk(
    'order/fetchCompleteOrder',
    async (orderDetails) => {
        try {
            const { data } = await axios.get(`/api/order/${userId}/${orderId}`);
            const order = data;
            return order
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchOpenOrder = createAsyncThunk(
    'order/fetchOpenOrder',
    async (userId) => {
        try {
            const { data } = await axios.get(`/api/order/${userId}`);
            return data
        } catch (error) {
            console.log(error)
        }
    })



export const editPlantQtyThunk = (userId, orderId, plantId, plant) => {
    return async (dispatch) => {
        const { data: order } = await axios.put(`/api/order/${userId}/${orderId}/${plantId}`, plant);
    };

};


export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        value: [],
        status: 'idle',
        error: null
    },
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(.pending, (state, action) => {
            state.status = 'loading'
        })
builder.addCase(.fulfilled, (state, action) => {
    state.status = 'succeded'
    return action.payload
})
builder.addCase(.rejected, (state, action) => {
    state.status = 'failed'
    state.error = action.error.message
})

    }
})

export default orderSlice.reducer


