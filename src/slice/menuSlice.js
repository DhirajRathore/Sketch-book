import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constants";

const intialState = {
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItem: null,
};

export const menSlice = createSlice({
  name: "menu",
  initialState: intialState,
  reducers: {
    menuItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
    actionItemClick: (state, action) => {
      state.actionMenuItem = action.payload;
    },
  },
});

export const { menuItemClick, actionItemClick } = menSlice.actions;

export default menSlice.reducer;
