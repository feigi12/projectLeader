import React, { useEffect } from 'react';
import Menu from './menu';
import { useState } from 'react';
import { connect } from 'react-redux';
import { actionUser } from '../redux/actions/actionUser';
import { Redirect, Link, withRouter } from 'react-router-dom';
import NewPost from './newPost';
import OnPost from './onePost';
import alertDialog from './alertDaialog';
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
    const [open, setOpen] = useState(false);
    const handleClickOpen = (index) => {

        setOpen(true);
        setShow(true)

    };
  
    const handleClose = () => {
        setShow(true)
        setOpen(false);
    };

    // const updateP = (id, post) => {
    //     debugger;
    //     alertDialog("Sure you want to update this post?").then(() => {
    //         debugger;
    //         console.log(id, post);
    //         updatePost(id, post)
    //     });
    // }

    const deleteP = (id) => {
        debugger;
        alertDialog("Sure you want to delete this post?").then(() => {
            deletePostSuccess(id)
        });
    }
    return (
        <>
            <Menu />
            <h1 className="h1My">My Post</h1>

            <NewPost newPost={newPost} setShow={setShow} open={open} handleClose={handleClose} ></NewPost>
            <button className="btn btn-primary  " type="submit" onClick={() => { handleClickOpen(null) }}> ADD NEW POST</button>
            <div className="row d-flex justify-content-center">
                <div className="col-xs-12 col-md-11  col-lg-9 mb-5 mt-5">
                    {
                        myPost.length > 0 ? <>
                            {myPost.map(index => (
                                <OnPost
                                updatePost={updatePost}
                                    index={index}
                                    deleteP={deleteP}
                                ></OnPost>
                            ))}  </> : <h5>You have no messages</h5>
                    }

                </div>
            </div>

        </>
    )
}
) 