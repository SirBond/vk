import React from 'react'
import Classes from './nav.module.css'

const Navbar = () => {
    return (   
        <nav className='sidebar'>
            <ul>
                <li className={Classes.item}><a href="/#">Страница 1</a></li>
                <li className={Classes.item}><a href="/#">Страница 2</a></li>
                <li className={Classes.item}><a href="/#">Страница 3</a></li>
            </ul>
        </nav>      
    )
}

export default Navbar