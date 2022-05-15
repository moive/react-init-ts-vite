import { TYPES } from "../types";

export const plus = () => ({ type: TYPES.COUNTER.INCREMENT });
export const subtract = () => ({ type: TYPES.COUNTER.DECREMENT });
export const plus5 = () => ({ type: TYPES.COUNTER.INCREMENT_5, payload: 5 });
export const subtract5 = () => ({
	type: TYPES.COUNTER.DECREMENT_5,
	payload: 5,
});
export const reset = () => ({ type: TYPES.COUNTER.RESET });
