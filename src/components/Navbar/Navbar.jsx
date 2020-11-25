import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './nav.module.css'


const Navbar = () => {
    return (   
        <nav className='sidebar'>
            <ul>
                <li className={`${c.item}`}><NavLink activeClassName={c.activ} to="/profile">Профиль</NavLink></li>
                <li className={c.item}><NavLink activeClassName={c.activ} to="/dialog">Мессенджер</NavLink></li>
                <li className={c.item}><NavLink activeClassName={c.activ} to="/news">Новости</NavLink></li>
                <li className={c.item}><NavLink activeClassName={c.activ} to="/music">Музыка</NavLink></li>
                <li className={c.item}><NavLink activeClassName={c.activ} to="/settings">Настройки</NavLink></li>
            </ul>
        </nav>      
    )
}

export default Navbar