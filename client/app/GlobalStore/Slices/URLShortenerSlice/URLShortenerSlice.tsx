import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface URLShortenerPROPS {
  userEnteredURL: string;
  getURLShortenerService: {
    getURLShortenerServiceData: any;
    getURLShortenerServiceStatus: "PENDING" | "FULFILLED" | "REJECTED";
  };
}

const initialState: URLShortenerPROPS = {
  userEnteredURL: "",
  getURLShortenerService: {
    getURLShortenerServiceData: null,
    getURLShortenerServiceStatus: "PENDING",
  },
};

export const getURLShortenerService = createAsyncThunk("getUserDetailsService", async (incomingObj: any, thunkAPI) => {
  let data = JSON.stringify(incomingObj);
  console.log(incomingObj, "INCOMING OBJ");
  const config = {
    method: "POST",
    url: "http://localhost:8000/url",
    headers: {
      "Content-Type": "applicaton/json",
    },
    data: data,
  };

  try {
    const resP = await axios(config);
    const resPdata = await resP.data;
    console.log(JSON.stringify(resPdata));
    return resPdata;
  } catch (err: any) {
    return err.response.message;
  }
});

const userDetailSlice = createSlice({
  name: "userDetailSlice",
  initialState,
  reducers: {
    sendUserEnteredURL: (state, action: PayloadAction<any>) => {
      state.userEnteredURL = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getURLShortenerService.pending, (state, action) => {
      state.getURLShortenerService.getURLShortenerServiceStatus = "PENDING";
      state.getURLShortenerService.getURLShortenerServiceData = null;
    });

    builder.addCase(getURLShortenerService.fulfilled, (state, action) => {
      state.getURLShortenerService.getURLShortenerServiceStatus = "FULFILLED";
      state.getURLShortenerService.getURLShortenerServiceStatus = action.payload;
    });

    builder.addCase(getURLShortenerService.rejected, (state, action) => {
      state.getURLShortenerService.getURLShortenerServiceStatus = "REJECTED";
      state.getURLShortenerService.getURLShortenerServiceData = null;
    });
  },
});

export const { sendUserEnteredURL } = userDetailSlice.actions;

export default userDetailSlice.reducer;
