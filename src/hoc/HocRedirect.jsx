import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const HocRedirect = (Comment) => {
  class HocComponent extends React.Component {
    render() {
      if(!this.props.isAuth) return <Redirect to={'/login'} />
      return <Comment {...this.props} />
    }
  }

  let ConnectHocComponent = connect(mapStateToProps)(HocComponent)

  return ConnectHocComponent
}