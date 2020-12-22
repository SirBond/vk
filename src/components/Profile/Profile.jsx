import React from 'react'
import MyPostContainer from './Mypost/MyPostContainer'
import ProfileInfoContainer from './Profileinfo/ProfileinfoContainer'
import ProfileStatus from './Profileinfo/ProfileStatus'

const Profile = (props) => {
    return (
        <div>
            <ProfileStatus />
            <ProfileInfoContainer />
            <MyPostContainer />
        </div>
    )
}

export default Profile