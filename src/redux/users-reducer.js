const FOLLOWED = 'FOLLOWED'
const SET_USERS = 'SET-USERS'
const CURRENT_PAGE = 'CURRENT-PAGE'

let init = { 
  UsersData: [],
  pageSize: 100,
  totalCount: 0,
  currentPage: 1
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

export const addUsersAC = (id) => ({type: FOLLOWED, id: id})
export const setUsersAC = (users, total) => ({type: SET_USERS, users: users, total: total})
export const currentPageAC = (page) => ({type: CURRENT_PAGE, page: page})