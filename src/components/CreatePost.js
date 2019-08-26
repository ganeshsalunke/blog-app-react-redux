import React, { Component } from 'react';
//Step 15: import connect from react-redux, 
//a connector package, and use it in the last export line
import {connect} from 'react-redux';

import { createPost } from '../services/postsService';

class CreatePost extends Component {

    onCreatePostHandler(e) {
        e.preventDefault();
        console.log(this.getTitle.value);
        console.log(this.getMessage.value);

        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        
        //Step 14; 
        const data = {
            id: new Date().getTime(),
            title,
            message
        }

        //Step 17: IT's time to dispatch events. 
        console.log(this.props);
        this.props.dispatch(createPost( data ));
        //and Step 18 is in PostList.js
        
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                    {/* Step 13: Write Form Submit */}
                <form onSubmit={this.onCreatePostHandler.bind(this)}>
                    <input required type="text" 
                        className="form-control"
                        placeholder="Enter Post Title"
                        ref={(input)=>this.getTitle = input}/>
                        {/* Step 12: Added Refs for Form Inputs */}
                    <br /><br />
                    <textarea required rows="5" cols="28"
                        placeholder="Enter Post" 
                        className="form-control"
                        ref={(input)=>this.getMessage = input}
                        /><br /><br />
                    <button className="btn btn-primary">Add Post</button>
                </form>
            </div>
        );
    }
}
//export default CreatePost;
//Step 16:  comment the above line and make it 
//like the following. after connecting props will be available 
//in this component. 
//check Step 17 here in this file.
export default connect()(CreatePost); 


