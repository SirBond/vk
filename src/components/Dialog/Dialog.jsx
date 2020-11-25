import React from 'react'
import s from './Dialog.module.css'
import DialogItem from './Dialogitem/Dialogitem'
import MessageItem from './Messageitem/Messageitem'

const Dialog = (props) => {
    
    let dialogData = [
        {id: 'roman', name: 'Роман'},
        {id: 'saroga', name: 'Сарожа'},
        {id: 'borh', name: 'Борщ'},
        {id: 'gril', name: 'Гриля'},
        {id: 'dgov', name: 'Джовани'},
        {id: 'egor', name: 'Егор'}
    ]

    let messageData = [
        {id: '1', message: 'Привет'},
        {id: '2', message: 'Как жизнь'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'},
        {id: '5', message: 'Yo'},
    ]

    return (
        <div className={s.content}>
            <DialogItem dialogData={dialogData} />
            <MessageItem messageData={messageData} />
        </div>
    )
}

export default Dialog