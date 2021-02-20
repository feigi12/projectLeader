import React,{useEffect} from 'react';
import Menu from './menu';
import { useState } from 'react';
import { connect } from 'react-redux';
import { actionUser } from '../redux/actions/actionUser';
import { Redirect, Link, withRouter } from 'react-router-dom';
import NewPost from './newPost';
import OnPost from './onePost';
import alertDialog from './alertDaialog'
function mapStateToProps(state) {
    return {
        idUser: state.userReduser.user.id,
        myPost: state.userReduser.user.posts
    }
}
const mapDispatchToProps = (dispatch) => ({
    addPostMy: (id) => dispatch(actionUser.addPostMy(id)),
    newPost: (post) => dispatch(actionUser.newPost(post)),
    deletePostSuccess: (idP) => dispatch(actionUser.deletePostSuccess(idP)),
    updatePost: (id, post) => dispatch(actionUser.editPost({ id: id, post: post }))
})
export default connect(mapStateToProps, mapDispatchToProps)(function MyPost(props) {
    const { myPost, newPost, idUser, deletePostSuccess, updatePost } = props
    const [show, setShow] = useState(false)
    useEffect(() => {
        alert('sallom')
    }, [myPost])
    const updateP = (id, post) => {
        debugger;
        alertDialog("Sure you want to update this post?").then(() => {
            debugger;
            console.log(id, post);
            updatePost(id, post)
        });
    }

    const deleteP = (id) => {
        debugger;
        alertDialog("Sure you want to delete this post?").then(() => {
            deletePostSuccess(id)
        });
    }
    return (
        <>
            <Menu />
            <h1>My Post</h1>
            {show ? <>
                <NewPost newPost={newPost} setShow={setShow} idUser={idUser}></NewPost>
            </> : <>
                    <button className="btn btn-primary  " type="submit" onClick={() => { setShow(true) }}> ADD NEW POST</button>
                </>}

            <div className="row d-flex justify-content-center">
                <div className="col-xs-12 col-md-11  col-lg-9 mb-5 mt-5">
                    {
                        myPost.length > 0 ? <>
                            <table className="table mt-5 ">
                                <thead>
                                    <tr>
                                        <th scope="col">title</th>
                                        <th scope="col">body</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        myPost.map(index => (
                                            <OnPost index={index}
                                                updateP={updateP}
                                                deletePost={deleteP}></OnPost>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </> : <h5>אין לך הודאות</h5>
                    }

                </div>
            </div>

        </>
    )
}
) 