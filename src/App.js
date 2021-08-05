import React, { useEffect } from 'react';
import './App.css';
import Header from './header/header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './feed/Feed';
import Widget from './widget/Widget';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser} from './features/userSlice'
import Login from './Login/Login';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  //推到redux store
  //這樣就算刷新網頁也不會自動登出
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if (userAuth) {
        dispatch(
          login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoURL:userAuth.profilePic,
            
          })
        )
      }else{
        dispatch(logout())
      }
    })
  },[])

  //沒有user就render <Login />
  return (
    <div className="app">
      <Header />
      {
        (!user) ? (<Login />) : (
          <div className='app-body'>
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        )
      }
      
    </div>
  );
}

export default App;
