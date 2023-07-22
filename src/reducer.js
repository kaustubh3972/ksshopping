// AT FIRST, VARIABLES ARE DECLARED IN REDUCER BY US, AND THEN ACTION IS DECIDED
let initialState = { isLogin: "N", member: {}, basket: [], total: 0 };
export function appReducer(state = initialState, action) {
	if (action.type == "loginSuccess") {
		return { ...state, isLogin: action.value };
	} else if (action.type == "isMember") {
		return { ...state, member: action.value };
	} else if (action.type == "addToBasket") {
		return { ...state, basket: [...state.basket, action.value] };
	} else if (action.type == "setTotal") {
		return { ...state, total: parseInt(state.total) + parseInt(action.value) };
	} else {
		return state;
	}
}
// VARIABLES ARE COPIED TO ACTION SO THAT NO ERROR IS MADE IN NAME
/*
loginSuccess
isMember
addToBasket
setTotal
*/
