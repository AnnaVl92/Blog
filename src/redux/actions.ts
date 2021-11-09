import {FETCH_POSTS} from "./actionTypes";
import { PostState } from "../types/PostState";

export function fetchPosts(payload:PostState) {
    return {
        type: FETCH_POSTS,
        payload
    }
}