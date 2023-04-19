import { Action, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { Product, CartProduct } from '../src/components/Types/Type';

type CartState = CartProduct[];
const INITIAL_STATE: CartState = [];
export const REDUCER_NAME = 'carts';
export const ACTION_TYPE = {

    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
}

export const ACTION_CREATORS = {

    addToCart: (payload: CartProduct) => ({ type: ACTION_TYPE.ADD_TO_CART, payload }),
    removeFromCart: (payload: CartProduct) => ({ type: ACTION_TYPE.REMOVE_FROM_CART, payload }),
    clearCart: () => ({ type: ACTION_TYPE.CLEAR_CART }),
}
export const addToCartReducer: Reducer = (state: CartState = INITIAL_STATE, action) => {

    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            {
                const CartProduct = action.payload;
                const copyState = [...state];
                // if (!copyState.includes(CartProduct.product)) {
                //     copyState.push(CartProduct);
                //     console.log(CartProduct.product.id + "idli ürün sepete eklendi");
                // }
                // else {
                //     copyState.forEach(element => {
                //         if (element.product.id === CartProduct.product.id) {
                //             element.quantity += CartProduct.quantity;
                //         }
                //     });
                //     console.log(CartProduct.product.id + "idli ürünün sepeteki adeti" + CartProduct.quantity + " arttırıldı");
                // }
                let isInculude : boolean = false;
                copyState.forEach(element => {
                    if (element.product === CartProduct.product) {
                        element.quantity += CartProduct.quantity
                        isInculude = true;
                        console.log(CartProduct.product.id + "idli ürünün sepeteki adeti" + CartProduct.quantity + " arttırıldı");
                        return copyState;
                    }
                });
                if(isInculude === false){
                    copyState.push(CartProduct);
                    console.log(CartProduct.product.id + " idli ürün sepete eklendi");
                }
                return copyState;
            }
        case ACTION_TYPE.REMOVE_FROM_CART:
            {
                const CartProduct = action.payload;
                const copyState = [...state];
                const index = copyState.indexOf(CartProduct);
                if (index > -1) {
                    copyState.splice(index, 1);
                }
                return copyState;

            }
        case ACTION_TYPE.CLEAR_CART:
            return [];
        default:
            return state;
    }
}
export const SELECTORS = {
    CartList: (rootState: { carts: CartState }) => {
        return rootState[REDUCER_NAME];
    },
    isProductInCart: (itemId: number) => {
        return (rootState: { carts: CartState }) => {
            console.log(rootState[REDUCER_NAME.product]?.includes(itemId) || false);
            return rootState[REDUCER_NAME.product]?.includes(itemId) || false;
        }
    }


}; 