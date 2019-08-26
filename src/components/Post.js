import React from 'react';
import { NavLink } from 'react-router-dom';

const Post = (props) => {
  return (
    <div className='postBox'>
      <h2>
        <NavLink to={`posts/${props.id}`} 
        className="nav-link" exact>{ props.title }</NavLink>
      </h2>
      <p>{ props.message }</p>
      <button className="btn btn-info" type="button">
        Edit
      </button>
      <button className="btn btn-danger" type="button">
        Delete
      </button>
    </div>
  );
};

export default Post;