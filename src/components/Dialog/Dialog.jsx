import React from 'react'
import s from './Dialog.module.css'
import DialogItem from './Dialogitem/Dialogitem'
import MessageItemContainer from './Messageitem/MessageItemContainer'

const Dialog = (props) => {
    return (
        <div className={s.content}>
            <DialogItem dialogData={props.dialogData} />
            <MessageItemContainer />
        </div>
    )
}

export default Dialog