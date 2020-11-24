import React from 'react'
import s from './MyPost.module.css'
import Post from './Post/Post'

function MyPost() {
    return (
        <div className='my-post'>
            <div className='mess'>

            </div>
            <div className='all-post'>
                <ul>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </ul>
            </div>
        </div>
    )
}

export default MyPost