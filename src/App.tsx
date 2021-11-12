import React from 'react';
import Posts from './components/Posts/Posts';
import AddPost from './components/AddPost/AddPost';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      <AddPost />
      <Posts />
    </Container>
  );
}

export default App;
