import React from 'react'
import s from './Post.module.css'

function Post(props) {
    let post = props.PostData.map(value => 
        <li className={s.item} key={value.id}>
            <img src={value.img} alt='' />
            <a href="/#">{value.post}</a>
            <div><span>like</span></div>
        </li>
    )
    return (
        post
    )
}

export default Post