import React from 'react'
import s from './Users.module.css'
import UsersItemContainer from './Usersitem/UsersItemContainer'

const Users = () => {
    return (
        <div className={s.content}>
            <UsersItemContainer />
        </div>
    )
}

export default Users