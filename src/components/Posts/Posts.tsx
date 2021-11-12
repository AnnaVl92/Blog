import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import IPost from '../../types/IPost';
import {PostState} from "../../types/PostState";
import {fetchPostsData, fetchPostByIdData} from "../../redux/dataMethods";
import { Row, Col, Card, ButtonGroup, Button } from 'react-bootstrap';

const Posts = () => {
  const posts = useSelector((state: PostState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData("https://jsonplaceholder.typicode.com/posts"));
  }, [dispatch]);
  
  return (
    <Row md={1} className="g-4">
      {posts.map((post: IPost) => {
        const { id, title, body } = post;
          
        return (
          <Col key={id}>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                {title}
                <ButtonGroup aria-label="Basic example">
                  <Button
                    variant="outline-dark"
                    onClick={() => dispatch(fetchPostByIdData(`https://jsonplaceholder.typicode.com/posts/${id}`))}
                  >
                    Edit
                  </Button>
                  <Button variant="outline-dark">Delete</Button>
                </ButtonGroup>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {body}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Posts;