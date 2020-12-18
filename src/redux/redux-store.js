import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import messageReducer from './message-reducer'
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  post: profileReducer,
  mess: messageReducer,
  dialogData: dialogReducer,
  users: usersReducer,
  auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store