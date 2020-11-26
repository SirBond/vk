import React from 'react'
import s from './Dialog.module.css'
import DialogItem from './Dialogitem/Dialogitem'
import MessageItem from './Messageitem/Messageitem'

const Dialog = (props) => {

    return (
        <div className={s.content}>
            <DialogItem dialogData={props.dialogData} />
            <MessageItem messageData={props.messageData} />
        </div>
    )
}

export default Dialog