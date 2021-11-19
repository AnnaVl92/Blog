import React, {useState, useEffect, useMemo} from 'react';
import { useDispatch} from "react-redux";
import { Form, Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import IModal from "../../types/IModal";
import { editPostData } from '../../redux/dataMethods';
import { UpdatedPost } from '../../types/UpdatedPost';

const EditPost = (props:IModal) => {
    const handleClose = () => {
        props.setShow(false);
    };
    const defaultPost = { title: "", body: "" };
    const dispatch = useDispatch();

    const [postText, setPost] = useState(defaultPost);

    const { register, handleSubmit, reset} = useForm({
        defaultValues: useMemo(() => {
            return props.post;
          }, [props]),
    });

    //2 useEffect for different actions
    useEffect(() => {
        setPost({ title: props.post.title, body: props.post.body});
    }, [props.post.body, props.post.title]);

    useEffect(() => {
        reset(postText);
    }, [postText, reset]);

    const onSubmit = (data: UpdatedPost) => {
        data.id = props.post.id;
        data.userId = props.post.userId;
        dispatch(editPostData(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data));
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
                            {...register("title")}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="postText">
                        <Form.Label>Text</Form.Label>
                        <Form.Control
                            type="text"
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