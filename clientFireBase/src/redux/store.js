// 
import {createStore ,combineReducers,applyMiddleware} from 'redux';
import userReduser from './reduser/user';
// import postReduser from './reduser/allPost';
import {addUser,getAllPostSuccess,loginSuccess,newPost,deletePostSuccess,editPost} from './midelWare/crud';
const reduser=combineReducers({userReduser})
const store=createStore(reduser,
    applyMiddleware(addUser,getAllPostSuccess,loginSuccess,newPost,deletePostSuccess,editPost))
window.store=store
export default store