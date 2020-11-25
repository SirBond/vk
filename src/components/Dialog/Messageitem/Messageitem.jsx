import React from 'react'
import s from './../Dialog.module.css'

const MessageItem = (props) => {
  let mess = props.messageData.map(value => <div className={s.message}>{value.message}</div>)
  return (     
    <div className={s.messages}>
      {mess}
    </div>
        
    
  )
}
export default MessageItem