import { Dispatch } from 'redux';
import { fetchPosts } from './actions';

export default function fetchPostsData(url:string) {
    return (dispatch:Dispatch) => {
        fetch(url)
            .then((response) => response.json())
            .then((posts) => dispatch(fetchPosts(posts)));
    }
}
