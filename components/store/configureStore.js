import {createStore, applyMiddleware} from 'redux';
import userReducer from '../reducers';

export default function configureStore(initialState) {
    return createStore(userReducer, initialState);
}