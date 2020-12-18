import { getAuthUser } from "../api/api"

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
      return {...state, ...action.data, isAuth: true}  
    default:
      return state 
  }
}

export default authReducer

export const addUserDataAC = (data) => ({type: USER_DATA, data: data})
export const isFetchingAC = (e) => ({type: IS_FETCHING, e: e})

export const addUserDataThunk = () => {
  return (dispatch) => {
    getAuthUser().then(data => {
      if(data.resultCode === 0){
        dispatch(addUserDataAC(data.data))
      }
    })
 }
}