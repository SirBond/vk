import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className='header'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/868px-HP_New_Logo_2D.svg.png' alt='' />
            <div>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Авторизация</NavLink>}
            </div>
        </header>
    )
}

export default Header