import React from "react";
import {Field, Form, Formik} from "formik";
import * as yup from 'yup'

const LoginContainer = (props) => {
  return <LoginForm/>
}

const LoginForm = () => {

  const validationSchema = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Обязательное поле'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательное поле')
  })

  return <div>
    <h1>Login form</h1>
    <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => {
          console.log(values)
        }}
        validateOnBlur
        validationSchema={validationSchema}
    >
      {({
          values, errors, touched,
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
            { touched.password && errors.password && <p>{errors.password}</p>}
            <button type={"submit"} disabled={!isValid && !dirty} onClick={handleBlur}>
              Submit
            </button>
          </Form>
      )}
    </Formik>
  </div>
}

export default LoginContainer;