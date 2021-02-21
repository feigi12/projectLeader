import { actionUser } from '../actions/actionUser';
import axios from 'axios';
export const addUser = ({ dispatch, getState }) => next => action => {
    let newUser
    if (action.type === 'ADD_USER') {
        debugger;
        axios.post('http://localhost:4009/addUser', action.payload)
            .then(res => {
                debugger;
                console.log(res.data);
                newUser = res.data
                if (newUser!=undefined) {
                    dispatch(actionUser.setUser(newUser))
                }
                
            }).catch(err=>{
                dispatch(actionUser.setError(newUser))
            })
    }
    return next(action)
}

export const getAllPostSuccess = ({ dispatch, getState }) => next => action => {
    let allPosts
    if (action.type === 'GET_ALL_POST_SUCCESS') {
        axios.get('http://localhost:4009/getAllPostApi')
            .then(res => {
                console.log(res.data);
                allPosts = res.data
                dispatch(actionUser.getAllPost(allPosts))
            })
    }
    return next(action)
}
export const loginSuccess = ({ dispatch, getState }) => next => action => {
    if (action.type === 'LOGIN_SUCCESS') {
        axios.post('http://localhost:4009/login', action.payload)
            .then(res => {
                let user = res.data
                if (user!=null) {
                    dispatch(actionUser.login(user))
                }
                else {
                    dispatch(actionUser.setError(user))
                }
            })
            .catch(err => {
                console.log(err.massage)
            })
    }
    return next(action)
}
export const deletePostSuccess = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_POST_SUCCESS') {
        axios.delete(`http://localhost:4009/deletePost/${action.payload}`)
            .then(res => {
                debugger;
                console.log(res.data);
                dispatch(actionUser.deletePost(res.data))
            })
            .catch(err => {
                console.log(err.massage)
            })
    }
    return next(action)
}
export const editPost = ({ dispatch, getState }) => next => action => {
    if (action.type === 'EDIT_POST') {
        axios.post(`http://localhost:4009/editPost/${action.payload.id}`, action.payload.post)
            .then(res => {
                debugger;
                console.log(res.data);
                const post = res.data
                dispatch(actionUser.updatePost(res.data))
            })
            .catch(err => {
                console.log(err.massage)
            })
    }

    return next(action)
}
export const newPost = ({ dispatch, getState }) => next => action => {
    if (action.type === 'NEW_POST') {
        axios.post('http://localhost:4009/addPost', action.payload)
            .then(res => {
                debugger;
                console.log(res.data);
                let posts = res.data
                dispatch(actionUser.newPostSuccess(posts))
            })
            .catch(err => {
                console.log(err.massage)
            })
    }
    return next(action)
}
