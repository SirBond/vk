import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Users.module.css'
import { getUsersFallowed } from '../../../api/api'

const UsersItem = (props) => {
  
    let countPag = props.totalCount / props.pageSize

    let pages = []

    for(let i = 1; i <= Math.ceil(countPag); i++){
        pages.push(i)
    }
    
    return (
        <div>
            { pages.map(value => {
                return (<span onClick={() => {props.onPageCurrent(value)}} className={props.currentPage === value && s.pagActive}> {value} </span>)
            })}

            
            { props.UsersData.map(value => <div key={value.id} className={s.contents}>
                <div className={s.block1}>
                    <NavLink to={'/profile/' + value.id }>
                        <img src={value.photos.small} alt="" />
                    </NavLink>
                    {value.name}<br />
                    <button onClick={() => {
                        props.onClickUpdate(value.followed, value.id)

                        // getUsersFallowed(value.followed, value.id).then(data => {
                        //     if(data.resultCode === 0){
                        //         props.onClickUpdate(value.id)
                        //     }
                        // })


                        // if(!value.followed) {
                        //     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${value.id}`, {}, 
                        //     {
                        //         withCredentials: true,
                        //         headers: {
                        //             'API-KEY': 'c0b2b982-db8c-4015-8027-3d9f8fe70c59'}
                        //     })
                        //     .then(response => {
                        //         if(response.data.resultCode === 0){
                        //             props.onClickUpdate(value.id)
                        //         }
                        //     })
                        // } else {
                        //     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${value.id}`, 
                        //     {
                        //         withCredentials: true,
                        //         headers: {
                        //             'API-KEY': 'c0b2b982-db8c-4015-8027-3d9f8fe70c59'}
                        //     })
                        //     .then(response => {
                        //         if(response.data.resultCode === 0){
                        //             props.onClickUpdate(value.id)
                        //         }
                        //     })
                        // }
                    
                    }}>{value.followed ? 'Вы в друзьях' : 'Пригласить в друзья'
                    }</button>
                </div>
                <div className={s.block2}> 
                    <div className={s.sity1}>{/*value.location.city*/}</div>
                    <div className={s.sity2}> {/*value.location.country*/} </div>
                    {value.Status}
                </div>
            </div>)}
        </div>
    )
}

export default UsersItem