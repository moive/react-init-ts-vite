import { combineReducers } from "redux";
import { counReducer } from "../../reducers/countReducer";

const reducer = combineReducers({
	counter: counReducer,
});

export default reducer;
