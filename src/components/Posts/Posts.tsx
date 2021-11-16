import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import IPost from '../../types/IPost';
import {PostState} from "../../types/PostState";
import { Row, Col } from 'react-bootstrap';
import Post from "./Post/Post";
import {fetchPostsData} from "../../redux/dataMethods";

const Posts = () => {
  const posts = useSelector((state: PostState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData("https://jsonplaceholder.typicode.com/posts"));
  }, [dispatch]);
  
  return (
    <Row md={1} className="g-4">
      {posts.map((post: IPost) => 
        <Col key={post.id}>
          <Post {...post}/>
        </Col>)}
    </Row>
  );
}

export default Posts;