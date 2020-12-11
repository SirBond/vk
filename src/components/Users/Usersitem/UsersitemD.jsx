import React from 'react'
import s from './../Users.module.css'
import * as axios from 'axios'

class UsersItem extends React.Component {
    getUsers = () => {
        if(props.UsersData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users/').then(response => {
                props.setUsers(response.data.items)
            })    
        }
    }    

    onClickUpdate = (id) => {
        props.updateFollowed(id)
    }

    user = props.UsersData.map(value =>
        <div key={value.id} className={s.contents}>
            <div className={s.block1}>
                <img src={value.img} alt='' />
                {value.name}<br />
                <button onClick={onClickUpdate.bind(null, value.id)}>{value.followed ? 'Вы в друзьях' : 'Пригласить в друзья'}</button>
            </div>
            <div className={s.block2}> 
                <div className={s.sity1}>{/*value.location.city*/}</div>
                <div className={s.sity2}> {/*value.location.country*/} </div>
                {value.Status}
            </div>
        </div>)
    
    render() {
        return (
            <div>
                {getUsers()}
                
                {user}
            </div>
        )
    }
}

export default UsersItem