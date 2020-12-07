const ADD_MESS_TEXT = 'ADD-MESS-TEXT'
const ADD_MESS = 'ADD-MESS'

let init = {
  newMessText: 'Hi, ',
  messageData: [
    {id: '1', message: 'Привет'},
    {id: '2', message: 'Как жизнь'},
    {id: '3', message: 'Yo'},
    {id: '4', message: 'Yo'},
    {id: '5', message: 'Yo'},
  ]
}

const messageReducer = (state = init, action) => {

  switch(action.type) {
    case ADD_MESS:
      let size = state.messageData.length + 1
      let newMess = {
        id: size, 
        message: state.newMessText
      }
      return (
        {...state, newMessText: '', messageData: [...state.messageData, newMess]}
      )
      case ADD_MESS_TEXT: {
        return (
          {...state, newMessText: action.mess}
        )
    }
      default:
        return state 
  }
}

export default messageReducer

export const addMessActionCreate = () =>  ({type: ADD_MESS})

export const addMessTextActionCreate = (mess) => ({type: ADD_MESS_TEXT, mess: mess})