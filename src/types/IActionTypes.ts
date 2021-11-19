import { FETCH_POSTS, ADD_NEW_POST, FETCH_POST_BY_ID, EDIT_POST, DELETE_POST, LOAD_MORE } from "../redux/actionTypes";
import IPost from "../types/IPost";
import { PostState } from "./PostState";

export interface FetchPostActionType {
    type: typeof FETCH_POSTS,
    payload: []
};

export interface AddNewPostActionType {
    type: typeof ADD_NEW_POST,
    payload: IPost
};

export interface FetchPostByIdActionType {
    type: typeof FETCH_POST_BY_ID,
    payload: IPost
};

export interface EditPostActionType {
    type: typeof EDIT_POST,
    payload: IPost
};

export interface DeletePostActionType {
    type: typeof DELETE_POST,
    payload: IPost['id']
}

export interface LoadMorePostsActionType {
    type: typeof LOAD_MORE,
    payload: PostState['visiblePostsAmount']
}