import React from 'react'
import { combineReducers, createStore } from 'redux'
import messageReducer from './message-reducer'
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
  post: profileReducer,
  mess: messageReducer,
  dialogData: dialogReducer,
  users: usersReducer,
})
let store = createStore(reducers)

export default store