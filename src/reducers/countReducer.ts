import { TYPES } from "../actions/countActions";

interface SelectItemState {
	count: number;
}

type Action = {
	type: string;
	payload?: number;
	isInit?: boolean;
};

export const countInitialState: SelectItemState = { count: 0 };

const valueWhenIniExist = 200;

export const countInit = (initialState: SelectItemState) => ({
	count: initialState.count + valueWhenIniExist,
});

const resetState = (isInit: boolean = false) => {
	if (isInit) {
		return { count: valueWhenIniExist };
	}

	return countInitialState;
};

export function counReducer(
	state: SelectItemState,
	action: Action
): SelectItemState {
	switch (action.type) {
		case TYPES.INCREMENT:
			return { count: state.count + 1 };
		case TYPES.INCREMENT_5:
			return { count: state.count + action.payload! };
		case TYPES.DECREMENT:
			return { count: state.count - 1 };
		case TYPES.DECREMENT_5:
			return { count: state.count - action.payload! };
		case TYPES.RESET:
			return resetState(action.isInit);
		default:
			return state;
	}
}
