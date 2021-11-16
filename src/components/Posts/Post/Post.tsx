import React from 'react';
import IPost from '../../../types/IPost';
import { useDispatch } from "react-redux";
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import { fetchPostByIdData, deletePostData } from "../../../redux/dataMethods";
import { deletePost } from '../../../redux/actions';

const Post = (post: IPost) => {
    const dispatch = useDispatch();
    const getPostById = () => {
        dispatch(fetchPostByIdData(`https://jsonplaceholder.typicode.com/posts/${post.id}`));
        post.showModal(true);
    };
    const deleteThisPost = () => {
        dispatch(deletePostData(`https://jsonplaceholder.typicode.com/posts/${post.id}`));
        dispatch(deletePost(post.id));
    }

    return (
        <Card>
            <Card.Header className="d-flex align-items-center justify-content-between">
                {post.title}
                <ButtonGroup aria-label="Basic example">
                    <Button
                        variant="outline-dark"
                        onClick={getPostById}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={deleteThisPost}
                    >
                        Delete
                    </Button>
                </ButtonGroup>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                  {post.body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Post;