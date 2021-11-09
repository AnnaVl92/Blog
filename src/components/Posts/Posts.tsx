import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import IPost from '../../types/IPost';
import {PostState} from "../../types/PostState";
import fetchPostsData from "../../redux/fetchPostsData";
import { Row, Col, Card } from 'react-bootstrap';

const Posts = () => {
  const posts = useSelector((state: PostState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData("https://jsonplaceholder.typicode.com/posts"));
  });
  
  return (
    <Row md={1} className="g-4">
      {posts.map((post: IPost) => {
        const { id, title, body } = post;
          
        return (
          <Col key={id}>
            <Card>
              <Card.Header>{title}</Card.Header>
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