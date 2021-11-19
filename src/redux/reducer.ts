import { FETCH_POSTS, ADD_NEW_POST, FETCH_POST_BY_ID, EDIT_POST, DELETE_POST, LOAD_MORE } from "./actionTypes";
import { PostState } from "../types/PostState";
import {
    FetchPostActionType,
    AddNewPostActionType,
    FetchPostByIdActionType,
    EditPostActionType,
    DeletePostActionType,
    LoadMorePostsActionType
} from "../types/IActionTypes";
import initialState from "./initialState";

type ActionType = FetchPostActionType | AddNewPostActionType | 
    FetchPostByIdActionType | EditPostActionType | DeletePostActionType | LoadMorePostsActionType;

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
            return {...state, currentPost: action.payload}

        case EDIT_POST:
            if (state.posts) {
                const posts = state.posts.map(post => {
                    if (post.id === action.payload.id) {
                        post.title = action.payload.title;
                        post.body = action.payload.body;
                    };
                    return post;
                });
                return {...state, posts: [...posts]};
            };
            return {...state};

        case DELETE_POST:
            if (state.posts) {
                const posts = state.posts.filter(post => post.id !== action.payload);
                return {...state, posts: [...posts]};
            };
            return {...state};

        case LOAD_MORE:
            return {...state, visiblePostsAmount: state.visiblePostsAmount + 5};

        default:
            return state;
    }
};

export default reducer; 