import { addUserDataThunk } from "./auth-reducer"

const INI = 'INI'

let init = {
  ini: false
}
const appReducer = (state = init, action) => {

  switch(action.type) {
    case INI:
      return {...state, ini: true}  
    default:
      return state 
  }
}

export default appReducer

const iniAC = () => ({type: INI})

export const iniTC = () => (dispatch) => {
    let dispatchResult = dispatch(addUserDataThunk())
    Promise.all([dispatchResult]).then(() => {
      dispatch(iniAC())
    })
 }
