import { ADD_POST, GET_POSTS, DELETE_POST,  } from "../actions/types";

//What's a Reducer?
// It is a function that takes the current 
//state and an action that was dispatched as it’s parameters and returns the new state.

//Step4: below code snippet 
const postReducer = (state = [], action) => {
    //Step8: 
    switch(action.type) {
        case ADD_POST:
            return [...state, action.payload];
        case GET_POSTS:
            return action.posts;
        case DELETE_POST:
            return state.filter((post)=>post.id !== action.id);
        default:
            return state;
    }
}
//Step 8 - clarification - in the above code, 
//action.type = Event and action.data = Form Data from Add Post

export default postReducer;
//step5: We'll fill this later. 
//but, now it is time to understand the concept called 'Actions'
//What are Actions? 
//Actions are plain Javascript objects with a type property. 
//This type property describes the event that is taking place in the application.


//Step6: Let's focus on Combining Reducers into one. Let's create reducers/index.js
