import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CounterState } from "./types";

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		plus: (state) => {
			state.value += 1;
		},
		subtract: (state) => {
			state.value -= 1;
		},
		plus5: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		subtract5: (state, action: PayloadAction<number>) => {
			state.value -= action.payload;
		},
		reset: (state) => {
			state.value = initialState.value;
		},
	},
});

export const { plus, subtract, plus5, subtract5, reset } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
