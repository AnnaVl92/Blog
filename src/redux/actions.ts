import { FETCH_POSTS, ADD_NEW_POST, FETCH_POST_BY_ID, EDIT_POST, DELETE_POST } from "./actionTypes";
import { PostState } from "../types/PostState";
import { NewPost } from "../types/NewPost";
import IPost from "../types/IPost";

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

export function fetchPostById(payload:IPost['id']) {
    return {
        type: FETCH_POST_BY_ID,
        payload
    }
}

export function editPost(payload:IPost) {
    return {
        type: EDIT_POST,
        payload
    }
}

export function deletePost(payload:IPost['id']) {
    console.log(payload);
    return {
        type: DELETE_POST,
        payload
    }
}