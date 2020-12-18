import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { HocRedirect } from '../../../hoc/HocRedirect'
import {addMessActionCreate, addMessTextActionCreate} from '../../../redux/message-reducer'
import MessageItem from './Messageitem'


let mapStateToProps = (state) => {
  return {
    messageData: state.mess.messageData,
    newMessText: state.mess.newMessText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessText: (text) => {
      dispatch(addMessTextActionCreate(text))
    },
    addMess: () => {
      dispatch(addMessActionCreate())
    }
  }
}

const MessageItemContainer = connect(mapStateToProps, mapDispatchToProps)(HocRedirect(MessageItem))
export default MessageItemContainer