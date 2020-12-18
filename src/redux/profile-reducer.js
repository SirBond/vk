import { getProfile } from "../api/api"

const ADD_POST_TEXT = 'ADD-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER = 'SET-USER'
const IS_FETCHING = 'IS=FETCHING'

let init = { 
  Profile: [],
  PostData: [
    {id: 1, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост1'},
    {id: 2, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост2'},
    {id: 3, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост3'},
  ],
    newPostText: 'Hi, Roman',
    isFetching: false
}

const profileReducer = (state = init, action) => {
  switch(action.type){
    case ADD_POST:
      let size = state.PostData.length + 1
      let newObj = {
        id: size,
        img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1',
        post:  state.newPostText
      }
      return {...state, newPostText: '', PostData: [ ...state.PostData, newObj]  }
    case SET_USER:
      return {...state, Profile: action.user }
    case ADD_POST_TEXT:
      return {...state, newPostText: action.text}     
    case IS_FETCHING:
      return {...state, isFetching: action.e}
    default:
      return state
  }
}

export default profileReducer

export const addPostActionCreate = () => ({type: ADD_POST})
export const addPostTextActionCreate = (text) => ({type: ADD_POST_TEXT, text: text})
const addProfileAC = (user) => ({type: SET_USER, user: user})
export const isFetchingAC = (e) => ({type: IS_FETCHING, e: e})

export const getProfileThunkCreator = (id) => {
  return (dispatch) => {
    dispatch(isFetchingAC(true))
    getProfile(id).then(data => {
      dispatch(addProfileAC(data))
      dispatch(isFetchingAC(false))
    })
  }
}