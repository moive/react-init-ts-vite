import { TYPES } from "../types";

const InitialState = 0;

export default function contadorReducir(state = InitialState, action) {
	switch (action.types) {
		case TYPES.COUNTER.INCREMENT:
			return state + 1;
		case TYPES.COUNTER.DECREMENT:
			return state - 1;
		case TYPES.COUNTER.INCREMENT_5:
			return state + action.payload;
		case TYPES.COUNTER.DECREMENT_5:
			return state - action.payload;
		default:
			return state;
	}
}
