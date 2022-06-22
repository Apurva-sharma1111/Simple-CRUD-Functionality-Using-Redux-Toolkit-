import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: "Av", email: "av@gmail.com" }]

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,

    reducers: {

        addUser: (state, action) => {
            state.push(action.payload)
            return state
        },

        deleteUser: (state, action) => {
            state = state.filter(i => i.id !== action.payload)
            return state
        },

        editUser: (state, action) => {
            state = state.map((i) => i.id === action.payload.id ? action.payload : i)
            return state
        }
    }
});


export const {addUser, deleteUser, editUser} = userSlice.actions;

export default userSlice.reducer;