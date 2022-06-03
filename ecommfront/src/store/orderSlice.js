import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const removedPlantThunk = (userId, orderId, plantId) => async (dispatch) => {
	try {
		const { data: order } = await axios.delete(
			`/api/order/${userId}/${orderId}/${plantId}`
		)
	} catch (error) {
		console.error(error);
	}
};

export const updateCartAdd = (userId, plantId) => async (dispatch) => {
	try {
		const { data: cartDetailsPlant } = await axios.get(
			`/api/order/${userId}/${plantId}`
		);
		
	} catch (error) {
		console.error(error);
	}
};


export const fetchCompleteOrder = (userId, orderId) => {
	return async (dispatch) => {
		const { data } = await axios.get(`/api/order/${userId}/${orderId}`);
		const order = data;
        return order
	};
};

export const fetchOpenOrder = (userId) => {
	return async (dispatch) => {
		const { data } = await axios.get(`/api/order/${userId}`);
		return data 
	};
	
};



export const editPlantQtyThunk = (userId, orderId, plantId, plant) => {
  return async (dispatch) =>  {
    const { data: order} = await axios.put(`/api/order/${userId}/${orderId}/${plantId}`, plant); 
  };

};


// export const checkOutThunk = (userId, orderId, history) => {
// 	return async (dispatch) => {
// 		try {
// 			//order complete
// 			const { data } = await axios.put(`/api/order/${userId}/${orderId}`);
// 			// dispatch(orderComplete(data));
// 			//subtract quantity
// 			history.push('/thankyou');
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};
// }

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


