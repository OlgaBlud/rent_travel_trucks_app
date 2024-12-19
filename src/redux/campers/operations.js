import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//  66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
export const apiGetAllCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        " https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
      );
      // console.log("data: ", data);
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
