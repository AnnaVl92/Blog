import React, {useState} from 'react';
import IPost from '../../../types/IPost';
import { useDispatch } from "react-redux";
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import { fetchPostByIdData, deletePostData } from "../../../redux/dataMethods";
import { deletePost } from '../../../redux/actions';
import EditPost from '../../EditPost/EditPost';

const Post = (post: IPost) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const getPostById = () => {
        setShow(true);
        dispatch(fetchPostByIdData(`https://jsonplaceholder.typicode.com/posts/${post.id}`));
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
                <EditPost show={show} setShow={setShow} />
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