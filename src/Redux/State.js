let store = {
  _state: {
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
  },
  getState() {
    return this._state
  },
  _callSubscriber () {

  },
  addMessage() {
    let newMessage = {
      id: 6,
      message: this._state.messagePage.newMessageText
    }
    this._state.messagePage.messages.push(newMessage);
    this._state.messagePage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewTextMessage(newText) {
    this._state.messagePage.newMessageText = newText
    this._callSubscriber(this._state);
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewTextPost(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  Subscribe(observer) {
    this._callSubscriber = observer;
  }

}

window.store = store;
export default store;