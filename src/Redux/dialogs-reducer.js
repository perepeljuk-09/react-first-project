const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {

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
}

export const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.newMessage
      }
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    default :
      return state;
  }
}

export const addMessageActionCreator = (newMessage) => ({type: ADD_MESSAGE, newMessage});

export default dialogsReducer;