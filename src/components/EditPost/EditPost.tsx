import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NewPost } from '../../types/NewPost';
import IModal from "../../types/IModal";
import { PostState } from '../../types/PostState';

const EditPost = (props:IModal) => {
    const {register, handleSubmit} = useForm<NewPost>();
    const handleClose = () => props.setShow(false);
    const dispatch = useDispatch();

    const {curPost} = {curPost: useSelector((state:PostState) => state.currentPost)};
    const onSubmit = (data: NewPost) => {
        console.log("gg");
    };
    
    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Change Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="mt-3 mb-5" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="postTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={curPost?.title}
                            {...register("title")}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="postText">
                        <Form.Label>Text</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={curPost?.body}
                            {...register("body")}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditPost;