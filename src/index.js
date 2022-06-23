import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

// AddPost('SamuraiJS.COM')


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
      <BrowserRouter>
        <React.StrictMode>
          <App state={state}
               addPost={store.addPost.bind(store)}
               updateNewTextPost={store.updateNewTextPost.bind(store)}
               updateNewTextMessage={store.updateNewTextMessage.bind(store)}
               addMessage={store.addMessage.bind(store)}/>
        </React.StrictMode>
      </BrowserRouter>
  );
}
  rerenderEntireTree(store.getState());
  store.Subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
