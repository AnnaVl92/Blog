import React from 'react';
import { useDispatch } from "react-redux";
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NewPost } from "../../types/NewPost";
import { addNewPostData } from "../../redux/dataMethods";

const AddPost = () => {
    const {register, handleSubmit} = useForm<NewPost>();
    const dispatch = useDispatch();

    const onSubmit = (data: NewPost) => {
        data.userId = 1;
        dispatch(addNewPostData("https://jsonplaceholder.typicode.com/posts", data));
    };

    return (
        <Form className="mt-3 mb-5" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="postTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    {...register("title")}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postText">
                <Form.Label>Text</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter text"
                    {...register("body")}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default AddPost;