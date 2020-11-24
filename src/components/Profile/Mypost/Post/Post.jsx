import React from 'react'
import s from './Post.module.css'

function Post() {
    return (
        <li className={s.item}>
             <img src='https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1' alt='' />
            <a href="/#">Пост1</a>
            <div><span>like</span></div>
        </li>
    )
}

export default Post