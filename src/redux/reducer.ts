import {FETCH_POSTS} from "./actionTypes";
import { PostState } from "../types/PostState";

const initialState:PostState = {
    posts: []
};

const reducer = (state = initialState, action: { type: string; payload: [] }): PostState => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, posts: action.payload};

        default:
            return state;
    }
}

export default reducer; 