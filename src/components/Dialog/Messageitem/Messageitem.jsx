import React, { createRef } from 'react'
import s from './../Dialog.module.css'
import {addMessActionCreate, addMessTextActionCreate} from './../../../redux/state'

const MessageItem = (props) => {
  let mess = props.messageData.map(value => <div className={s.message}>{value.message}</div>)

  let messCreate = createRef()

  function onChangeMessText(){
    let text = messCreate.current.value
    props.dispatch(addMessTextActionCreate(text))
  }

  function onClickMess(){
    props.dispatch(addMessActionCreate())
  }

  return (     
    <div className={s.messages}>
      {mess}
      <div>
        <textarea value={props.newMessText} ref={messCreate} onChange={onChangeMessText}></textarea>
      </div>
      <button onClick={onClickMess}>Отправить</button>
      
    </div>
        
    
  )
}
export default MessageItem