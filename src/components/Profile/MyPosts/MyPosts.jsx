import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, Form, Formik} from "formik";
import {maxLengthCreator} from "../../Validate/MaxLength";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);


  let onAddPost = (newPost) => {
    props.addPost(newPost);
  }

  let NewPostForm = () => {
    let maxLength30 = maxLengthCreator(30)
    return <div>
      <Formik initialValues={{newPost: ""}}
              onSubmit={(values,) => {
                onAddPost(values.newPost)
                console.log(values)
              }
              }
              validateOnBlur
      >
        {({
            values, errors, touched,
            handleBlur, handleChange
          }) => (
            <Form>
              <div>
                <Field validate={maxLength30} onChange={handleChange} onBlur={handleBlur}
                       value={values.newPost}
                       name="newPost" type="newPost"
                       placeholder="Enter your text"
                       className={errors.newPost ? s.error:null}
                />
              </div>
              {touched.newPost && errors.newPost && <p className={s.errorText}>{errors.newPost}</p>}
              <div>
                <button type="submit" disabled={!values.newPost || errors.newPost}>Add post</button>
              </div>
            </Form>
        )}
      </Formik>
    </div>
  }

  return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <NewPostForm/>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
  )
}


export default MyPosts;