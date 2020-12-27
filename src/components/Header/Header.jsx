import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutTC } from '../../redux/auth-reducer'

const Header = (props) => {

    const onClickLogout = () => {
        props.logoutTC()
    }  
    return (
        <header className='header'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/868px-HP_New_Logo_2D.svg.png' alt='' />
            <div>
                {props.isAuth ? <div> {props.login} <button onClick={onClickLogout}>Выйти</button> </div> : <NavLink to={'/login'}>Авторизация</NavLink>}
            </div>
        </header>
    )
}

export default connect(null, {logoutTC: logoutTC})(Header)