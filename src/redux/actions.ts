import { FETCH_POSTS, ADD_NEW_POST } from "./actionTypes";
import { PostState } from "../types/PostState";
import { NewPost } from "../types/NewPost";

export function fetchPosts(payload:PostState) {
    return {
        type: FETCH_POSTS,
        payload
    }
};

export function addNewPost(payload:NewPost) {
    return {
        type: ADD_NEW_POST,
        payload
    }
}