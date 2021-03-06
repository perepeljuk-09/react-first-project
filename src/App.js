import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login'

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />}/>
            <Route path='/profile/*' element={<ProfileContainer />}/>
            <Route path='/dialogs/*' element={<DialogsContainer />}/>
            <Route path='/users/*' element={<UsersContainer />}/>
            <Route path='/login' element={<LoginPage />}/>
          </Routes>
        </div>
      </div>
  )
}

export default App;