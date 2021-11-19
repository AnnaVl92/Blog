import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import IPost from '../../types/IPost';
import {PostState} from "../../types/PostState";
import { Row, Col, Button } from 'react-bootstrap';
import Post from "./Post/Post";
import {fetchPostsData} from "../../redux/dataMethods";
import EditPost from '../EditPost/EditPost';
import {visiblePosts} from '../../redux/selectors';
import {loadMore} from "../../redux/actions";

const Posts = () => {
  const posts = useSelector(visiblePosts);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const showEditPost = (isShown:boolean) => {
    setShow(isShown);
  };
  const loadMorePosts = () => {
    dispatch(loadMore());
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
      <Row>
        <Col>
          <div className="text-center">
            <Button
              className="mt-4 mb-4"
              variant="primary"
              onClick={loadMorePosts}
            >
              Show More Posts
            </Button>
          </div>
        </Col>
      </Row>
      {curPost && <EditPost post={curPost} show={show} setShow={setShow} />}
    </>
  );
}

export default Posts;