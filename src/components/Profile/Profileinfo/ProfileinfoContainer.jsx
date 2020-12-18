import React from 'react'
import { connect } from 'react-redux'
import { getProfileThunkCreator } from '../../../redux/profile-reducer'
import ProfileInfo from './Profileinfo'
import Loading from '../../Loading'
import {withRouter} from 'react-router-dom'
import { HocRedirect } from '../../../hoc/HocRedirect'

class profileApiContainer extends React.Component {

  componentDidMount() {
    this.props.getProfileThunkCreator(this.props.match.params.userId)
  }


  render() {
    return <> {this.props.isFetching ? <Loading /> : <ProfileInfo Profile={this.props.Profile} />} </>
  }
}


let mapStateToProps = (state) => {
  return {
    Profile: state.post.Profile,
    isFetching: state.post.isFetching
  }
}

let mapDispatchToProps = {
  getProfileThunkCreator: getProfileThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HocRedirect(profileApiContainer)))