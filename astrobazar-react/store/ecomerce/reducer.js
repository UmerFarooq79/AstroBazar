import { actionTypes } from './action';

export const initalState = {
    wishlistItems: [],
    compareItems: [],
    cartItems: [],
};

function reducer(state = initalState, action) {
    switch (action.type) {
        // new
        case actionTypes.SET_WISHLIST_ITEMS_SUCCESS:
            return {
                ...state,
                wishlistItems: action.payload,
            };
        case actionTypes.SET_CART_ITEMS_SUCCESS:
            return {
                ...state,
                cartItems: action.payload,
            };
        case actionTypes.SET_COMPARE_ITEMS_SUCCESS:
            return {
                ...state,
                compareItems: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
