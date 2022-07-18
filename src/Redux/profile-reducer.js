import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 31},
    {id: 4, message: 'fourth post', likesCount: 78}
  ],
  newPostText: 'zhivanchi',
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    case UPDATE_NEW_TEXT_POST:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
    return {
      ...state,
      status: action.status
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewTextPostActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getUsersProfile(userId)
        .then(response => {
          dispatch(setUserProfile(response.data))
        })
  }
}
export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
          dispatch(setStatus(response.data))
        })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
          if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
          }
        })
  }
}

export default profileReducer;