import { ADD_POST, GET_POSTS, DELETE_POST } from '../actions/types';
import axios from 'axios';

//Find the REST API URL 
//https://jsonplaceholder.typicode.com/posts 
//Http method: GET, POST, PUT, DELETE

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

//receiving response data as posts and attaching an event type called FETCH_POST and all the posts
export const fetchPosts = (posts) => {
    console.log(posts);
    return {
        type: GET_POSTS,
        posts
    }
};

//Initial Load to fetch all posts
export const fetchAllPosts = () => {
    return (dispatch) => {
        return axios.get(POSTS_API_URL)
            .then(response => {
                console.log(response);
                //calling the above util method to process data, that are ready to be sent
                dispatch(fetchPosts(response.data))
            })
            .catch(error => {
                throw (error);
            });
    }
}


//patching the data and returning 
export const createPostSuccess =  (data) => {
    console.log(data)
    return {
      type: ADD_POST,
      payload: {
        id: data.id,
        title: data.title,
        message: data.body
      }
    }
};

export const createPost = (data) => {
    return (dispatch) => {
        return axios.post(POSTS_API_URL, data )
            .then(response => {
                dispatch(createPostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};



