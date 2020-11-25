import React from 'react'
import s from './MyPost.module.css'
import Post from './Post/Post'

function MyPost() {

    let PostData = [
        {id: 1, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост1'},
        {id: 2, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост2'},
        {id: 3, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост3'},
    ]
    
    return (
        <div className='my-post'>
            <div className='mess'>

            </div>
            <div className='all-post'>
                <ul>
                    <Post PostData={PostData} />
                </ul>
            </div>
        </div>
    )
}

export default MyPost