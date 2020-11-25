import React from 'react'
import s from './../Dialog.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  return (     
    <div className={s.dialogs}>
        {props.dialogData.map(value =>{
            return <div className={s.dialog}><NavLink key={value.id} to={'/dialog/' + value.id}>{value.name}</NavLink></div>
        })}
        
    </div>  
  )
}
export default DialogItem