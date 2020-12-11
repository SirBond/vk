import React from 'react'
import s from './../Users.module.css'

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
                    <img src={value.photos.small} alt="" />
                    {value.name}<br />
                    <button onClick={props.onClickUpdate.bind(null, value.id)}>{value.followed ? 'Вы в друзьях' : 'Пригласить в друзья'}</button>
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