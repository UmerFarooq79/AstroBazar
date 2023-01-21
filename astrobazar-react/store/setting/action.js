export const actionTypes = {
    CHANGE_CURRENCY: 'CHANGE_CURRENCY',
    CHANGE_CURRENCY_SUCCESS: 'CHANGE_CURRENCY_SUCCESS',
};

export function changeCurrency(currency) {
    return { type: actionTypes.CHANGE_CURRENCY, currency };
}

export function changeCurrencySuccess(currency) {
    return { type: actionTypes.CHANGE_CURRENCY_SUCCESS, currency };
}
