import React from 'react'
import MyPost from './Mypost/MyPost'
import ProfileInfo from './Profileinfo/Profileinfo'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost PostData={props.PostData} addPost={props.addPost} />
        </div>
    )
}

export default Profile