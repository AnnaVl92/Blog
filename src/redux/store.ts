import { createStore, applyMiddleware } from 'redux';
import reducer from "../redux/reducer";
import thunk from 'redux-thunk';
import { PostState } from '../types/PostState';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from "./initialState";

function configureStore(initialState: PostState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}
const store = configureStore(initialState);

export default store;