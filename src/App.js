import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar state={props.state}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                     addPost={props.addPost}
                                                     updateNewTextPost={props.updateNewTextPost}/>}/>
            <Route path='/dialogs/*' element={<Dialogs state={props.state.messagePage}
                                                       updateNewTextMessage={props.updateNewTextMessage}
                                                      addMessage={props.addMessage}/>}/>
          </Routes>
        </div>
      </div>
  )
}

export default App;