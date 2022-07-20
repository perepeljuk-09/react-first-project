import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, Form, Formik} from "formik";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

  let newPostElement = React.createRef();

  let onAddPost = (newPost) => {
    props.addPost(newPost);
  }

  let NewPostForm = () => {

    const maxLength = (value) => {
      if (value.length > 30) return "Max length message 30 symbols";
    }

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
                <Field validate={maxLength} onChange={handleChange} onBlur={handleBlur} ref={newPostElement}
                       value={values.newPost}
                       name="newPost" type="newPost"/>
              </div>
              {touched.newPost && errors.newPost && <p>{errors.newPost}</p>}
              <div>
                <button type="submit">Add post</button>
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