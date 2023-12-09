import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "mohammad apon",
  email: "apon@gmail.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});



export default userSlice.reducer;
