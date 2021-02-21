import React, { useEffect } from 'react';
import Menu from './menu';
import { useState } from 'react';
import { connect } from 'react-redux';
import { actionUser } from '../redux/actions/actionUser';
import { Link } from 'react-router-dom';
import alertDialog from './alertDaialog';
import CircularProgress from '@material-ui/core/CircularProgress';

function mapStateToProps(state) {
    return {
        allPost: state.userReduser.allPost
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAllPostSuccess: () => dispatch(actionUser.getAllPostSuccess()),

    newPost: (post) => dispatch(actionUser.newPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(function AllPost(props) {
    const { allPost, newPost, getAllPostSuccess } = props
    const [firstLoading, setFirstLoading] = useState(true)

    const [show, setShow] = useState(false);
    useEffect(() => {
        if (firstLoading === true) {
            getAllPostSuccess()
            setFirstLoading(false)
        }
    }, [])

    const deleteLogicMessage = (post) => {
        alertDialog("Sure you want to add this post?").then(() => {
            newPost(post)
            handleShow()
        });
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Menu />
            {/* <div ><CircularProgress disableShrink /></div> */}

            <h1>All Post</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-xs-12 col-md-11  col-lg-9">
                    {allPost ? <table className="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">title</th>
                                <th scope="col">body</th>
                                <th scope="col">ADD</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                allPost.map(index => (
                                    <tr key={index.id}>
                                        <td>
                                            {index.title}
                                        </td>
                                        <td>
                                            {index.body}
                                        </td>
                                        <td>
                                            <button
                                                type="button" className="btn btn-primary mt-5 mb-5"
                                                onClick={(e) => deleteLogicMessage({ title: index.title, body: index.body })}
                                            >  ADD</button>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> :
                         <h1>בעיה בשליפת הנתונים</h1>
                    }

                </div>
            </div>

        </>
    )
}


) 