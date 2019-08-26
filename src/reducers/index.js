//Step 7: Combining Reducers using Redux's combineReducers
import {combineReducers} from 'redux';

//Step 7.1 loading all reducers
import postReducer from './postReducer'; 

////Step 7.2 combine all reducers into one big object for store
const rootReducers = combineReducers({
  posts: postReducer
});

//Step 7.3
export default rootReducers; 

//Step 9: Now that we have some code inside postReducer.js 
//let’s import it in our index.js file and pass 
//it to the store as an argument.

