import React from 'react'
import './App.css'
import Dialog from './components/Dialog/Dialog'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import {BrowserRouter, Route} from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Users from './components/Users/Users'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginContainer from './components/Login/LoginContainer'
import { connect } from 'react-redux'
import { addUserDataThunk } from './redux/auth-reducer'
import { iniTC } from './redux/app-reducer'
import Loading from './components/Loading'

class App extends React.Component {
  componentDidMount() {
    this.props.iniTC()
  }

  render() {

    if(!this.props.ini) {
      return <Loading />
    }
    return (
      <BrowserRouter>
        <div className='grid'>
          <HeaderContainer />
          <Navbar />
          <div className='content'>
            <Route path='/profile/:userId?' render={() => <Profile />} />
            <Route path='/dialog' render={() => <Dialog dialogData={this.props.dialogData} />} />
            <Route path='/users' render={() => <Users />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/login' render={() => <LoginContainer />} />
          </div>
        </div>
      </BrowserRouter>
    )
  }  
}

const mapStateToProps = (state) => ({
  ini: state.app.ini
})

export default connect(mapStateToProps, {iniTC: iniTC})(App)
