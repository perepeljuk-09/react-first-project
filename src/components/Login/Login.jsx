import React from "react";
import {Field, Form, Formik} from "formik";
import * as yup from 'yup'
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import s from './Login.module.css';

const LoginContainer = (props) => {
  if (props.isAuth) return <Navigate to='/profile'/>
  return <LoginForm {...props}/>
}

const LoginForm = (props) => {

  const validationSchema = yup.object().shape({
    email: yup.string().email('Enter the correct email').required('Required field'),
    password: yup.string().typeError('Must be s string').required('Required field')
  })

  return <div>
    <h1>Login form</h1>
    <Formik
        initialValues={{email: '', password: '',rememberMe: true}}
        onSubmit={(values,{setSubmitting ,setStatus}) => {
          props.login(values.email, values.password, values.rememberMe, setStatus, setSubmitting)
          console.log(values)
          setSubmitting(true)
        }}
        validateOnBlur
        validationSchema={validationSchema}
    >
      {({
          values, errors, touched, status, isSubmitting,
          handleBlur, handleChange, dirty, isValid, handleSubmit
        }) => (
          <Form>
            <label htmlFor={"email"}>Login</label>
            <p>
              <Field type="email" name="email" placeholder={"Enter your email"}
              onChange={handleChange} onBlur={handleBlur} value={values.email}
              />
            </p>
            { touched.email && errors.email && <p>{errors.email}</p>}
            <label htmlFor={"password"}>Password</label>
            <p>
              <Field type="password" name="password" placeholder={"Enter your password"}
                     onChange={handleChange} onBlur={handleBlur} value={values.password}/>
            </p>
            <p className={s.errorText}>{status && status}</p>
            { touched.password && errors.password && <p>{errors.password}</p>}
            <div>
              <Field type="checkbox" name="rememberMe"/> Remember me
            </div>
            <button type={"submit"} disabled={isSubmitting}name="submit">
              Submit
            </button>
          </Form>
      )}
    </Formik>
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginContainer);