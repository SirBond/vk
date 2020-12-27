import { stopSubmit } from "redux-form"
import { getAuthUser, loginApi, logoutApi } from "../api/api"

const USER_DATA = 'USER-DATA'
const IS_FETCHING = 'IS=FETCHING'

let init = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
}
const authReducer = (state = init, action) => {

  switch(action.type) {
    case USER_DATA:
      return {...state, ...action.data, isAuth: action.isAuth}  
    default:
      return state 
  }
}

export default authReducer

export const addUserDataAC = (data, isAuth) => ({type: USER_DATA, data: data, isAuth: isAuth})
export const isFetchingAC = (e) => ({type: IS_FETCHING, e: e})

export const addUserDataThunk = () => (dispatch) => {
    return getAuthUser().then(data => {
      if(data.resultCode === 0){
        dispatch(addUserDataAC(data.data, true))
      }
    })

 }

export const loginTC = (email, password, rememberMe) => {
  return (dispatch) => {
    loginApi(email, password, rememberMe).then(data => {
      console.log(data.messages)
      if(data.resultCode === 0) {
        dispatch(addUserDataThunk())
      } else {
        dispatch(stopSubmit('login', {_error: data.messages}))
      }
    })
  }
}

export const logoutTC = () => {
  return (dispatch) => {
    logoutApi().then(data => {
      if(data.resultCode === 0) {
        dispatch(addUserDataAC(null, false))
      }
    })
  }
}