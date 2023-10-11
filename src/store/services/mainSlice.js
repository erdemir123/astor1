import { createSlice } from '@reduxjs/toolkit'


const initialState = {
user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
themeMenu:false,
leftMenu: { menuSize: "large" },
pageInfo: { pageName: "Home" },
theme:"Light"
}
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload;
        localStorage.setItem("user",JSON.stringify(state.user))
    },
    setThemeMenu: (state, action) => {
        state.themeMenu = action.payload;
    },
    setMenuSize: (state, action) => {
      state.leftMenu.menuSize = action.payload;
    },
    setPageName: (state, action) => {
      state.pageInfo.pageName = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  }
});

export const {setUser,setThemeMenu,setMenuSize, setPageName ,setTheme} = mainSlice.actions

export default mainSlice.reducer

export const selectMenuSize = (state) =>
  state.main.leftMenu.menuSize;

export const selectPageName = (state) =>
  state.main.pageInfo.pageName;

export const selectTheme = (state) =>
  state.main.theme;


