import React from 'react'
import MyPost from './Mypost/MyPost'
import ProfileInfo from './Profileinfo/Profileinfo'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost PostData={props.PostData} dispatch={props.dispatch} newPostText={props.newPostText} />
        </div>
    )
}

export default Profile