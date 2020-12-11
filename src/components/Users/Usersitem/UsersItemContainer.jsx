import React from 'react'
import { connect } from 'react-redux'
import { addUsersAC, currentPageAC, setUsersAC } from '../../../redux/users-reducer'
import UsersItem from './UsersItem'
import * as axios from 'axios'

class UsersApiContainer extends React.Component {

  componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
          this.props.setUsers(response.data.items, response.data.totalCount)
      })
      
  }

  onClickUpdate = (id) => {
      this.props.updateFollowed(id)
  }

  onPageCurrent = (page) => {
      debugger
      this.props.setCurrentPage(page)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${page}&count=${this.props.pageSize}`).then(response => {
          this.props.setUsers(response.data.items, response.data.totalCount)
      })
  }
  render() {
      return <UsersItem totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} UsersData={this.props.UsersData} onClickUpdate={this.onClickUpdate} onPageCurrent={this.onPageCurrent} />
  }
}


let mapStateToProps = (state) => {
  return {
    UsersData: state.users.UsersData,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateFollowed: (id) => {
      dispatch(addUsersAC(id)) 
    },
    setUsers: (users, total) => {
      dispatch(setUsersAC(users, total))
    },
    setCurrentPage: (page) => {
      dispatch(currentPageAC(page))
    }
  }
}

const UsersItemContainer = connect(mapStateToProps,mapDispatchToProps)(UsersApiContainer)

export default UsersItemContainer