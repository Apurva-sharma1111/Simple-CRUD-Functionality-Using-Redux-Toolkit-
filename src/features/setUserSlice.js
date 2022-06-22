import { createSlice } from '@reduxjs/toolkit';

export const setUserSlice = createSlice({
    name: "setuser",
    initialState: {
        id: 0,
        name: "",
        email:""
    },
    reducers: {
        setUserForUp: (state = setUserSlice.initialState, action) => {
            state = action.payload
            return state
        }
    }
});

export const { setUserForUp }  = setUserSlice.actions;
export default setUserSlice.reducer;