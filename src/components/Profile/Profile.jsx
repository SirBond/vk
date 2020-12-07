import React from 'react'
import MyPostContainer from './Mypost/MyPostContainer'
import ProfileInfo from './Profileinfo/Profileinfo'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostContainer />
        </div>
    )
}

export default Profile