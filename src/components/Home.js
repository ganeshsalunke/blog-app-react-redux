import React, { Component } from 'react';
import CreatePost from './CreatePost';
import PostList from '../containers/PostList';

class Home extends Component {
    constructor(props) {
      super(props);
    }
    
    render() { 
      return ( 
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <CreatePost />
            </div>
            <div className="col-md-6">
              <PostList />
            </div>
          </div>
        </div>
      );
    }
  }
   
  export default Home;
  