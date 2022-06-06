import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const removedPlantThunk = createAsyncThunk(
  "order/removePlant",
  async (plantToRemove) => {
    try {
      const { userId, orderId, plantId } = plantToRemove;
      const { data: order } = await axios.delete(
        `/api/order/${userId}/${orderId}/${plantId}`
      );
      return order;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateCartAdd = createAsyncThunk(
  "order/updateCartAdd",
  async (cartDetails) => {
    try {
      const { userId, plantId } = cartDetails;
      const { data: cartDetailsPlant } = await axios.get(
        `/api/order/${userId}/${plantId}`
      );
      return cartDetailsPlant;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchCompleteOrder = createAsyncThunk(
  "order/fetchCompleteOrder",
  async (orderDetails) => {
    try {
      const { data } = await axios.get(`/api/order/${userId}/${orderId}`);
      const order = data;
      return order;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchOpenOrder = createAsyncThunk(
  "order/fetchOpenOrder",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/order/${userId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editPlantQtyThunk = createAsyncThunk(
  "order/editPlantQtyThunk",
  async (orderDetails) => {
    try {
      const { userId, orderId, plantId, plant } = orderDetails;
      const { data: order } = await axios.put(
        `/api/order/${userId}/${orderId}/${plantId}`,
        plant
      );
    } catch (error) {
      console.log(error);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    value: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
      //removePlantThunk
    builder.addCase(removedPlantThunk.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(removedPlantThunk.fulfilled, (state, action) => {
      state.status = "succeded";
      return action.payload;
    });
    builder.addCase(removedPlantThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    //updateCartAdd
    builder.addCase(updateCartAdd.pending, (state, action) => {
        state.status = "loading";
      });
      builder.addCase(updateCartAdd.fulfilled, (state, action) => {
        state.status = "succeded";
        return action.payload;
      });
      builder.addCase(updateCartAdd.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      //fetchComplete
      builder.addCase(fetchCompleteOrder.pending, (state, action) => {
        state.status = "loading";
      });
      builder.addCase(fetchCompleteOrder.fulfilled, (state, action) => {
        state.status = "succeded";
        return action.payload;
      });
      builder.addCase(fetchCompleteOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      //fetchOpen
      builder.addCase(fetchOpenOrder.pending, (state, action) => {
        state.status = "loading";
      });
      builder.addCase(fetchOpenOrder.fulfilled, (state, action) => {
        state.status = "succeded";
        return action.payload;
      });
      builder.addCase(fetchOpenOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      //editPlantQty
      builder.addCase(editPlantQtyThunk.pending, (state, action) => {
        state.status = "loading";
      });
      builder.addCase(editPlantQtyThunk.fulfilled, (state, action) => {
        state.status = "succeded";
        return action.payload;
      });
      builder.addCase(editPlantQtyThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
