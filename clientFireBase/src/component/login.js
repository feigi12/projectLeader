
import React, { useEffect, useState } from 'react';
import Menu from './menu';
import { connect } from 'react-redux';
import { Redirect, Link, withRouter } from 'react-router-dom'
import { actionUser } from '../redux/actions/actionUser'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signInWithGoogle } from '../fireBase/fireBase';
import Alert from '@material-ui/lab/Alert';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Required field')
        .email("Invalid email"),
    password: Yup.string()
        .min(5, 'Password must contain at least 5 characters')
        .max(50, 'Too Long!')
        .required('Required field')

});
function mapStateToProps(state) {
    return {
        errorMessage: state.userReduser.errorMessage
    }
}
const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(actionUser.loginSuccess(user)),
})

function Login(props) {
    const { getAllPost, login } = props
    const [firstLoading, setFirstLoading] = useState(true)
    useEffect(() => {
        if (props.errorMessage === null) {
            props.history.push('/home');
        }
    }, [props.errorMessage])
    const handelSubmit = (values) => {
        if (values.email == "" || values.password == "") {
            return <Redirect to={{ pathname: '/login', state: { flash: 'חובה להכניס את כל הנתונים' } }} />
        }
        else {
            let newUser = { email: values.email, password: values.password }
            login(newUser)
           
        }
    }
    return (
        <>
            <div className="row mt-5" >
                <div className=" col-3">

                </div>
                <div className=" col-6">
                    <h2>Log in to your account</h2>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        onSubmit={handelSubmit}
                        validationSchema={LoginSchema}>
                        <Form style={{ width: '50%', margin: 'auto' }}>

                            <div className="form-group">
                                <Field type="email" name="email" className="form-control" placeholder="Your Email" />
                                <ErrorMessage name="email" component="div" class="alert alert-danger" />
                            </div>
                            <div className="form-group">

                                <Field type="password" name="password" className="form-control" placeholder="Password" />
                                <ErrorMessage name="password" component="div" class="alert alert-danger" />
                            </div>
                            {props.errorMessage != null &&
                                <Alert  severity="error">
                                    Please provide a valid email and password!

                            </Alert>
                            }

                            <div className="form-group">
                                <button className="btn btn-primary btn-lg btn-block" type="submit"> Login</button>

                            </div>
                            <div className="form-group mt-3">
                                <Link className="nav-link" to="/">
                                    <button onClick={signInWithGoogle}
                                        className="btn btn-primary btn-lg btn-block">
                                        Sign in with Google</button>
                                </Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className=" col-3"></div>
            </div>
        </>
    )
}
export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(Login)));