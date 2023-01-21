import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
};

function reducer(state = initState, actions) {
    switch (actions.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false },
            };
        default:
            return state;
    }
}

export default reducer;
