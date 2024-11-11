import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { sendNotificationToast } from "../UISlice/UISlice";

interface URLShortenerPROPS {
  getTotalURLService: {
    getTotalURLServiceData: any;
    getTotalURLServiceStatus: "PENDING" | "FULFILLED" | "REJECTED";
  };
}

const initialState: URLShortenerPROPS = {
  getTotalURLService: {
    getTotalURLServiceData: null,
    getTotalURLServiceStatus: "PENDING",
  },
};

export const callTotalURLService = createAsyncThunk("callTotalURLService", async (_, thunkAPI) => {
  const data = null;
  const config = {
    method: "GET",
    url: "http://localhost:8000/api/getAllURL",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const resP = await axios(config);
    const resPdata = await resP.data;
    return resPdata;
  } catch (err: any) {
    thunkAPI.dispatch(
      sendNotificationToast({ Toast: { message: `Error: ${err.response.message}`, variant: "error" } })
    );
    return err.response.message;
  }
});

const getTotalURLSlice = createSlice({
  name: "getTotalURLSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(callTotalURLService.pending, (state, action) => {
      state.getTotalURLService.getTotalURLServiceStatus = "PENDING";
      state.getTotalURLService.getTotalURLServiceData = null;
    });

    builder.addCase(callTotalURLService.fulfilled, (state, action) => {
      state.getTotalURLService.getTotalURLServiceStatus = "FULFILLED";
      state.getTotalURLService.getTotalURLServiceData = action.payload;
    });

    builder.addCase(callTotalURLService.rejected, (state, action) => {
      state.getTotalURLService.getTotalURLServiceStatus = "REJECTED";
      state.getTotalURLService.getTotalURLServiceData = null;
    });
  },
});

export default getTotalURLSlice.reducer;
