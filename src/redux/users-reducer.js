import { getUsers, getUsersFallowed } from "../api/api"

const FOLLOWED = 'FOLLOWED'
const SET_USERS = 'SET-USERS'
const CURRENT_PAGE = 'CURRENT-PAGE'
const IS_FETCHING = 'IS=FETCHING'

let init = { 
  UsersData: [],
  pageSize: 100,
  totalCount: 0,
  currentPage: 1,
  isFetching: false
}

const usersReducer = (state = init, action) => {
  switch(action.type){
    case FOLLOWED:
      return {...state,
        UsersData: state.UsersData.map(value => {
          if(value.id === action.id){
            return {...value, followed: value.followed = !value.followed}
          }
          return value
        })
      }
    case CURRENT_PAGE:
      return {...state, currentPage: action.page}
    case SET_USERS:
      return {...state,  totalCount: action.total, UsersData: action.users}
    case IS_FETCHING:
      return {...state, isFetching: action.e}
      /*let stateCopy = {...state, UsersData: [...state.UsersData] }
      stateCopy.UsersData.forEach((value) => {
        if(value.id === action.id){
          value.followed = !value.followed
        }})
      return stateCopy*/
    default:
        return state
  }
}

export default usersReducer

const addUsersAC = (id) => ({type: FOLLOWED, id: id})
const setUsersAC = (users, total) => ({type: SET_USERS, users: users, total: total})
const currentPageAC = (page) => ({type: CURRENT_PAGE, page: page})
const isFetchingAC = (e) => ({type: IS_FETCHING, e: e})

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(currentPageAC(currentPage))
    dispatch(isFetchingAC(true))
    getUsers(currentPage, pageSize).then(data => {
      dispatch(isFetchingAC(false))
      dispatch(setUsersAC(data.items, data.totalCount))
    })
  }
}

export const getUsersFallowedThunkCreator = (followed, id) => {
  return (dispatch) => {
    getUsersFallowed(followed, id).then(data => {
      if(data.resultCode === 0) {
        dispatch(addUsersAC(id))
      }
    })
  }
}