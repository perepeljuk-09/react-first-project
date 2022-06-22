import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 31},
      {id: 4, message: 'fourth post', likesCount: 78}
    ],
    newPostText: 'zhivanchi'
  },
  messagePage: {

    dialogs: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrew'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Sasha'},
      {id: 5, name: 'Viktor'},
      {id: 6, name: 'Valera'}
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it-kamasutra?'},
      {id: 3, message: 'Yo'},
      {id: 4, message: 'fourth message'},
      {id: 5, message: 'fifth message'}
    ],
    newMessageText: 'add text'
  }
}
window.state = state;
export let addMessage = () => {
  let newMessage = {
    id: 6,
    message: state.messagePage.newMessageText
  }
  state.messagePage.messages.push(newMessage);
  state.messagePage.newMessageText = '';
  rerenderEntireTree(state);
}
export let updateNewTextMessage = (newText) => {
  state.messagePage.newMessageText = newText
  rerenderEntireTree(state);
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}
export let updateNewTextPost = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;