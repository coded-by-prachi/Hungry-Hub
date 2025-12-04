import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],


    reducers: {
        AddItem: (state, action) => {
            let exist = state.find((item) => item.id === action.payload.id)
            if (exist) {
                return state.map((item) => (item.id === action.payload.id ? { ...item, qnt: item.qnt + 1 } : item))
            } else {
                state.push({ ...action.payload, qnt: 1 });
            }
        },
        RemoveItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        Increment: (state, action) => {
            const item = state.find((i) => i.id === action.payload);
            if (item) {
                item.qnt += 1;
            }
        },
        Decrement: (state, action) => {
            const item = state.find((i) => i.id === action.payload);
            if (item)  item.qnt -= 1;
            }
        }
        });
export const { AddItem, RemoveItem, Increment, Decrement } = cartSlice.actions;
export default cartSlice.reducer;