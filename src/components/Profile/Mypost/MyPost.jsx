import React, { createRef } from 'react'
import s from './MyPost.module.css'
import Post from './Post/Post'

function MyPost(props) {
    let newNextElement = createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newNextElement.current.value
    
        props.updateNewPostText(text)
    }
    
    return (
        <div className='my-post'>
            <div className='mess'>
                <textarea value={props.newPostText} ref={newNextElement} onChange={onPostChange}></textarea>
                <div>
                    <button onClick={ onAddPost }>Отправить</button>
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