import React, { createRef } from 'react'
import s from './MyPost.module.css'
import Post from './Post/Post'

function MyPost(props) {

    let newNextElement = createRef()

    let addPost = () => {
        let text = newNextElement.current.value
        props.addPost(text)
    }
    
    return (
        <div className='my-post'>
            <div className='mess'>
                <textarea ref={newNextElement}></textarea>
                <div>
                    <button onClick={ addPost }>Отправить</button>
                </div>

            </div>
            <div className='all-post'>
                <ul>
                    <Post PostData={props.PostData} />
                </ul>
            </div>
        </div>
    )
}

export default MyPost