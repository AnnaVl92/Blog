import { FETCH_POSTS, ADD_NEW_POST } from "./actionTypes";
import { PostState } from "../types/PostState";
import {FetchPostActionType, AddNewPostActionType} from "../types/IActionTypes";

const initialState:PostState = {
    posts: []
};

type ActionType = FetchPostActionType | AddNewPostActionType;

const reducer = (state = initialState, action: ActionType): PostState => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, posts: action.payload};

        case ADD_NEW_POST:
            if (state.posts) {
                return {posts: [...state.posts, action.payload]}
            }
            return {posts: [action.payload]}

        default:
            return state;
    }
};

export default reducer; 