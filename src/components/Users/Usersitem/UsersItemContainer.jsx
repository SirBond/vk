import React from 'react'
import { connect } from 'react-redux'
import { getUsersFallowedThunkCreator, getUsersThunkCreator} from '../../../redux/users-reducer'
import UsersItem from './UsersItem'
import Loading from '../../Loading'
import { Redirect, withRouter } from 'react-router-dom'
import { HocRedirect } from '../../../hoc/HocRedirect'
import { compose } from 'redux'

class UsersApiContainer extends React.Component {

  componentDidMount() {
    // this.props.setIsFetching(true)
    // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //   this.props.setIsFetching(false)
    //   this.props.setUsers(data.items, data.totalCount)
    // })
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
      
  }

  onClickUpdate = (followed, id) => {
    this.props.getUsersFallowedThunkCreator(followed ,id)
  }
  
  onPageCurrent = (page) => {
    this.props.getUsersThunkCreator(page, this.props.pageSize)
    // this.props.setCurrentPage(page)
    // this.props.setIsFetching(true)
    // getUsers(page, this.props.pageSize).then(data => {
    //   this.props.setIsFetching(false)
    //   this.props.setUsers(data.items, data.totalCount)
    // })
  }
  render() {
    return <> {this.props.isFetching ? <Loading /> :
    <UsersItem totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} UsersData={this.props.UsersData} onClickUpdate={this.onClickUpdate} onPageCurrent={this.onPageCurrent} />}
    </>
  }
}


let mapStateToProps = (state) => {
  return {
    UsersData: state.users.UsersData,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
  }
}

/*let mapDispatchToProps = (dispatch) => {
  return {
    updateFollowed: (id) => {
      dispatch(addUsersAC(id)) 
    },
    setUsers: (users, total) => {
      dispatch(setUsersAC(users, total))
    },
    setCurrentPage: (page) => {
      dispatch(currentPageAC(page))
    },
    setIsFetching: (e) => {
      dispatch(isFetchingAC(e))
    }
  }
}*/

let mapDispatchToProps = {
  getUsersFallowedThunkCreator,
  getUsersThunkCreator
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withRouter,
  HocRedirect,
)(UsersApiContainer)