import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import IPost from '../../types/IPost';
import {PostState} from "../../types/PostState";
import { Row, Col } from 'react-bootstrap';
import Post from "./Post/Post";
import {fetchPostsData} from "../../redux/dataMethods";
import EditPost from '../EditPost/EditPost';

const Posts = () => {
  const posts = useSelector((state: PostState) => state.posts);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const showEditPost = (isShown:boolean) => {
    setShow(isShown);
  };
  const {curPost} = {curPost: useSelector((state:PostState) => state.currentPost)};
  
  useEffect(() => {
    dispatch(fetchPostsData("https://jsonplaceholder.typicode.com/posts"));
  }, [dispatch]);
  
  return (
    <>
      <Row md={1} className="g-4">
        {posts.map((post: IPost) => 
          <Col key={post.id}>
            <Post {...post} showModal = {showEditPost}/>
          </Col>)}
      </Row>
      {curPost && <EditPost post={curPost} show={show} setShow={setShow} />}
    </>
  );
}

export default Posts;