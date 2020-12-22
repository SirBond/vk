import React from 'react'
import s from './Profileinfo.module.css'

const ProfileInfo = (props) => {
  //alert(props.isAuth)
  return (
    <div>
      <img src='https://www.clearleecounselling.co.uk/wp-content/uploads/2017/06/mountainsbanner.png-1-1024x300.jpg' alt='' />
      <div className='my-prof-grid'>
          <div className='ava'>
              <img src='https://yt3.ggpht.com/a-/AAuE7mAYcqce8EX10PfTvbN5vbsmsLc0Q1YLtfHz=s240-mo-c-c0xffffffff-rj-k-no' alt='' />
          </div>
          <div className='descript'>
              <h1>Мой профиль</h1>
          </div>
      </div>

      <div className='my-prof-grid'>
          <div className='ava'>
            {props.Profile.photos && <img src={props.Profile.photos.small} alt='' />}
          </div>
          <div className='descript'>
              <h1>{props.Profile.aboutMe}</h1>
          </div>
      </div>
    </div>
  )
}

export default ProfileInfo