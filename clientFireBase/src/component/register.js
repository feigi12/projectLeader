// function component
import React, { useState } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionUser } from '../redux/actions/actionUser'
import { actionPost } from '../redux/actions/actionPost'
import { signInWithGoogle } from '../fireBase/fireBase'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const RegisterScema = Yup.object().shape({
    email: Yup.string()
        .required('Required field')
        .email("Invalid email"),
    firstName: Yup.string()
        .required('Required field'),
    lastName: Yup.string()
        .required('Required field'),
    password: Yup.string()
        .min(5, 'Password must contain at least 5 characters')
        .max(50, 'Too Long!')
        .required('Required field')

});

const mapDispatchToProps = (dispatch) => ({
    addUser: (user) => dispatch(actionUser.addUser(user)),
    getAllPost: () => dispatch(actionUser.getAllPost())
})

function Register(props) {
    const { addUser, getAllPost } = props
    const handelSubmit = (values) => {
        if (values.firstName === "" || values.lastName == '' || values.email == "" || values.password == "") {
            return <Redirect to={{ pathname: '/register', state: { flash: 'חובה להכניס את כל הנתונים' } }} />
        }
        else {
            let newUser = { firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.password }
            addUser(newUser)
            getAllPost()
            props.history.push('/menu');
        }
    }

    return (
        <>

            <div className="row mt-5" >
                <div className="col-xs-1 col-md-2 col-lg-3"></div>
                <div className=" col-xs-10 col-md-8 col-lg-6">
                    <h2>Get started free</h2>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: ""
                        }}
                        onSubmit={handelSubmit}
                        validationSchema={RegisterScema}>
                        <Form style={{ width: '50%', margin: 'auto' }}>
                            <div className="form-group">
                                <Field type="text" name="firstName" className="form-control" placeholder="First Name" />
                                <ErrorMessage name="firstName" component="div" class="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <Field type="text" name="lastName" className="form-control" placeholder="Last Name" />
                                <ErrorMessage name="lastName" component="div" class="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <Field type="email" name="email" className="form-control" placeholder="Your Email" />
                                <ErrorMessage name="email" component="div" class="alert alert-danger" />
                            </div>
                            <div className="form-group">

                                <Field type="password" name="password" className="form-control" placeholder="Password" />
                                <ErrorMessage name="password" component="div" class="alert alert-danger" />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-lg btn-block" type="submit"> Get Started</button>

                            </div>
                            <div className="form-group">
                                <Link className="nav-link" to="/">
                                    <button onClick={signInWithGoogle}
                                        className="btn btn-primary btn-lg btn-block">
                                        Sign in with Google</button>
                                </Link>
                            </div>
                            <h6 style={{ display: 'inline-block' }}>Already have an account?</h6>
                            <Link style={{ display: 'inline-block' }} className="nav-link" to="/login" >Sign in. </Link>
                        </Form>
                    </Formik>
                </div>
                <div className="col-xs-1 col-md-2 col-lg-3"></div>
            </div>
        </>
    )
}
export default (withRouter(connect(null, mapDispatchToProps)(Register)));