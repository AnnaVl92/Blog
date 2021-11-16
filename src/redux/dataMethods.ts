import { Dispatch } from 'redux';
import { NewPost } from '../types/NewPost';
import { UpdatedPost } from '../types/UpdatedPost';
import { fetchPosts, addNewPost, fetchPostById, editPost } from './actions';

export function fetchPostsData(url:string) {
    return (dispatch:Dispatch) => {
        fetch(url)
            .then((response) => response.json())
            .then((posts) => dispatch(fetchPosts(posts)));
    }
};

export function addNewPostData(url:string, data: NewPost) {
    return (dispatch:Dispatch) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((post) => dispatch(addNewPost(post)));
    }
};

export function fetchPostByIdData(url:string) {
    return (dispatch:Dispatch) => {
        fetch(url)
            .then((response) => response.json())
            .then((post) => dispatch(fetchPostById(post)));
    }
};

export function editPostData(url:string, data: UpdatedPost) {
    return (dispatch:Dispatch) => {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((post) => dispatch(editPost(post)));
    }
};

export function deletePostData(url:string) {
    return (dispatch:Dispatch) => {
        fetch(url, {
            method: 'DELETE',
        })
    }
};