import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const apiGetAllCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/campers");
      // console.log("data: ", data);
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const apiGetCamperById = createAsyncThunk(
  "campers/getById",
  async (camperId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${camperId}`);
      console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
