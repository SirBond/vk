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
          <Route path='/profile' render={() => <Profile PostData={props.state.PostData} dispatch={props.dispatch} newPostText={props.state.newPostText} />} />
          <Route path='/dialog' render={() => <Dialog dialogData={props.state.dialogData} dispatch={props.dispatch} messageData={props.state.messageData} newMessText={props.state.newMessText} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
