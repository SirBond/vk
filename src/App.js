import React from 'react'
import './App.css'
import Dialog from './components/Dialog/Dialog'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import {BrowserRouter, Route} from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

function App(props) {
  return (
    <BrowserRouter>
      <div className='grid'>
        <Header />
        <Navbar />
        <div className='content'>
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/dialog' render={() => <Dialog dialogData={props.dialogData} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
