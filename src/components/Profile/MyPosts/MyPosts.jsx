import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

import {addPostActionCreator, updateNewTextPostActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {

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

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;