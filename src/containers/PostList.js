//this file is a container. 
//You can later move into 'containers' folder
import React, {Component} from 'react';
//Step 18: 
import { connect } from 'react-redux';

import Post from '../components/Post';

class PostList extends Component {
  render(){
    return(
      <div>
        <p>All Posts</p>
        {/* Step 19: After making state to props 
        we'll have the posts here  */}
        {this.props.posts.map((post) => {
          return (
            <Post id={post.id} 
              title={post.title} 
              message={post.message} key={post.id}></Post>
          );
        } 
        )}
      </div>
    )
  }
}

//Step 18.1: add the function and export statement with connect. 
//the function does exactly the same. it maps state to props
const mapStateToProps = (state) => {
  console.log(state.posts);
  return {
      posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList);