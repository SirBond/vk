import React from 'react'
import MyPostContainer from './Mypost/MyPostContainer'
import ProfileInfoContainer from './Profileinfo/ProfileinfoContainer'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfoContainer />
            <MyPostContainer />
        </div>
    )
}

export default Profile