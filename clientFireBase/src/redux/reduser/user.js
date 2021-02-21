import produce from 'immer';
import createReduser from "./reduserUtil";
const initialState = {
    user: {
        id: 0,
        firstName: '',
        email: '',
        lastName: '',
        password: "",
        posts: [
        ]
    },
    allPost: [],
    errorMessage:undefined
}

const user = {
    setUser(state, action) {
        console.log(action.payload)
        state.user = action.payload
        state.errorMessage=null
    },
    newPostSuccess(state, action) {
        debugger;
        console.log(action.payload)
        state.user.posts=action.payload
    },
    login(state, action) {
        debugger;
        console.log(action.payload)
        state.user = action.payload
        state.errorMessage=null
    },
   
    getAllPost(state, action) {
        state.allPost = action.payload
    },
    deletePost(state, action) {
        debugger;
        state.user.posts = action.payload
    },
    updatePost(state, action) {
        debugger;
       state.user.posts=action.payload
    },
    setError(state, action) {
        debugger;
       state.errorMessage="error"
    }
}
export default produce((state, action) => createReduser(state, action, user), initialState)

