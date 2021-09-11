import React from 'react';
import logo from './fav.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
 import Dialogs from './components/Dialogs/Dialogs';
 import Profile from './components/Profile/Profile';
 import News from './components/News/News';
 import Music from './components/Music/Music';
 import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';




const App = (props) => {



  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className = 'app-wrapper-content'>
        <Route path = '/Profile' render={() => <Profile posts={props.posts} />}/> 
        <Route path = '/Dialogs' render={() => <Dialogs dialogs = {props.dialogs} messages = {props.messages} />}/>
        <Route path = '/News' render={() => <News />}/>
        <Route path = '/Music' render={() => <Music />}/>
        <Route path = '/Settings' render={() => <Settings />}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
