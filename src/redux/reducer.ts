import { FETCH_POSTS, ADD_NEW_POST, FETCH_POST_BY_ID, EDIT_POST } from "./actionTypes";
import { PostState } from "../types/PostState";
import {
    FetchPostActionType,
    AddNewPostActionType,
    FetchPostByIdActionType,
    editPostActionType
} from "../types/IActionTypes";
import initialState from "./initialState";

type ActionType = FetchPostActionType | AddNewPostActionType | FetchPostByIdActionType | editPostActionType;

const reducer = (state = initialState, action: ActionType): PostState => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, posts: action.payload};

        case ADD_NEW_POST:
            if (state.posts) {
                return {...state, posts: [...state.posts, action.payload]}
            }
            return {...state, posts: [action.payload]}

        case FETCH_POST_BY_ID:
            return {...state, currentPost: [action.payload]}

        case EDIT_POST:
            

        default:
            return state;
    }
};

export default reducer; 