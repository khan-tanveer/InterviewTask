import * as actionTypes from './types.js';

export const dataInCart = (id) => {
    return {
        type: actionTypes.DATA_IN_CART,
        payload: id
    }
}