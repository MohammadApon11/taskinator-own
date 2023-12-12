import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Mohammad Apon",
  email: "apon@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
