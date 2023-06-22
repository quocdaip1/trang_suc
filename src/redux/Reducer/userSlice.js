import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      {
        id: 0,
        username: "",
        password: "",
      },
    ],
    success: false,
    message: "",
  },
  reducers: {
    addUser: (state, action) => {
      const { id, username, password } = action.payload;
      const existingUser = state.users.some(
        (user) => user.username === username
      );

      if (!existingUser) {
        console.log('ok')
        return {
          ...state,
          users: [...state.users, { id, username, password }],
          success: true,
        };
      } else {
        console.log('no')

        return {
          ...state,
          success: false,
        };
      }
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
