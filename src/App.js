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
                                                     dispatch={props.dispatch}/>}/>
            <Route path='/dialogs/*' element={<Dialogs messagePage={props.state.messagePage}
                                                       dispatch={props.dispatch}/>}/>
          </Routes>
        </div>
      </div>
  )
}

export default App;