import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewTextMessage, updateNewTextPost, addMessage} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

// AddPost('SamuraiJS.COM')


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}
             addPost={addPost}
             updateNewTextPost={updateNewTextPost}
             updateNewTextMessage={updateNewTextMessage}
              addMessage={addMessage}/>
      </React.StrictMode>
    </BrowserRouter>
);
}