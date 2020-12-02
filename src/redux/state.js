import React from 'react'

const ADD_POST_TEXT = 'ADD-POST-TEXT'
const ADD_POST = 'ADD-POST'
const ADD_MESS_TEXT = 'ADD-MESS-TEXT'
const ADD_MESS = 'ADD-MESS'

let store = {
  _state: {PostData: [
    {id: 1, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост1'},
    {id: 2, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост2'},
    {id: 3, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост3'},
  ],
  newPostText: 'Hi, Roman',
  dialogData: [
    {id: 'roman', name: 'Роман'},
    {id: 'saroga', name: 'Сарожа'},
    {id: 'borh', name: 'Борщ'},
    {id: 'gril', name: 'Гриля'},
    {id: 'dgov', name: 'Джовани'},
    {id: 'egor', name: 'Егор'},
  ],
  newMessText: 'Hi, ',
  messageData: [
    {id: '1', message: 'Привет'},
    {id: '2', message: 'Как жизнь'},
    {id: '3', message: 'Yo'},
    {id: '4', message: 'Yo'},
    {id: '5', message: 'Yo'},
  ],},
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
    if(action.type === ADD_POST){
      let newObj = {
        id: 4,
        img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1',
        post:  this._state.newPostText
      }
      this._state.PostData.push(newObj)
      this._state.newPostText = ''
      this._ppps(this._state)
    } else if(action.type === ADD_POST_TEXT){
      this._state.newPostText = action.text
      this._ppps(this._state)
    } else if(action.type === ADD_MESS){
      let size = this._state.messageData.length + 1
      let newMess = {
        id: size, 
        message: this._state.newMessText
      }
      this._state.messageData.push(newMess)
      this._state.newMessText = ''
      this._ppps(this._state)
    } else if(action.type === ADD_MESS_TEXT){
      this._state.newMessText = action.mess
      this._ppps(this._state)
    }
  },
}

export const addPostActionCreate = () => ({type: ADD_POST})

export const addPostTextActionCreate = (text) => ({type: ADD_POST_TEXT, text: text})

export const addMessActionCreate = () =>  {
  return {type: ADD_MESS}
  }

export const addMessTextActionCreate = (mess) => {
  
  return {type: ADD_MESS_TEXT, mess: mess}
}


export default store