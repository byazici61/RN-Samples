import { createStore, combineReducers } from 'redux';
import { REDUCER_NAME, addToCartReducer } from './AddToCartRedux';

const rootReducer = combineReducers({
    [REDUCER_NAME]: addToCartReducer,
});

export const store = createStore(rootReducer);