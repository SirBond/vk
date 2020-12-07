import React from 'react'
import s from './../Dialog.module.css'

const MessageItem = (props) => {
  
  let mess = props.messageData.map(value => <div key={value.id} className={s.message}>{value.message}</div>)

  function onChangeMessText(e){
    props.addMessText(e.target.value)
  }

  function onClickMess(){
    props.addMess()
  }

  return (     
    <div className={s.messages}>
      {mess}
      <div>
        <textarea value={props.newMessText} onChange={onChangeMessText}></textarea>
      </div>
      <button onClick={onClickMess}>Отправить</button>
      
    </div>
        
    
  )
}
export default MessageItem