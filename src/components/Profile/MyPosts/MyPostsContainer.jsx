import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

import {addPostActionCreator, updateNewTextPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let postsElements = props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
      // props.addPost();
      props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
      let text = newPostElement.current.value
      // props.updateNewPostText(text);
      let action = updateNewTextPostActionCreator(text);
      props.dispatch(action);
    }

    return (<MyPosts />)
}

export default MyPostsContainer;