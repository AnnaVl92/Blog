import { FETCH_POSTS, ADD_NEW_POST } from "../redux/actionTypes";
import IPost from "../types/IPost";

export interface FetchPostActionType {
    type: typeof FETCH_POSTS,
    payload: []
};

export interface AddNewPostActionType {
    type: typeof ADD_NEW_POST,
    payload: IPost
};