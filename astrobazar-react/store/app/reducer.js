import { actionTypes } from './action';

export const initState = {
    isShowDemoPanel: false,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SWITCH_DEMO_PANEL_SUCCESS:
            return {
                ...state,
                ...{ isShowDemoPanel: action.payload },
            };
        default:
            return state;
    }
}

export default reducer;
