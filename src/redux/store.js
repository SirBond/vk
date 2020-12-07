import React from 'react'
import messageReducer from './message-reducer'
import profileReducer from './profile-reducer'


let store = {
  _state: {
    post: {
    PostData: [
      {id: 1, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост1'},
      {id: 2, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост2'},
      {id: 3, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост3'},
    ],
    newPostText: 'Hi, Roman',
  },
  dialogData: [
    {id: 'roman', name: 'Роман'},
    {id: 'saroga', name: 'Сарожа'},
    {id: 'borh', name: 'Борщ'},
    {id: 'gril', name: 'Гриля'},
    {id: 'dgov', name: 'Джовани'},
    {id: 'egor', name: 'Егор'},
  ],
  mess: {
    newMessText: 'Hi, ',
    messageData: [
      {id: '1', message: 'Привет'},
      {id: '2', message: 'Как жизнь'},
      {id: '3', message: 'Yo'},
      {id: '4', message: 'Yo'},
      {id: '5', message: 'Yo'},
    ],
  },

},
  _ppps() {
    console.log('State')
  },

  getState(){
    return this._state
  },
  subscribe(observer){
    this._ppps = observer
  },

  
  dispatch(action){
    profileReducer(this._state, action)
    messageReducer(this._state, action)
    this._ppps(this._state)
  },
}

export default store