import React from 'react'
import { connect } from 'react-redux'
import { editUserStatus } from '../../../api/api'
import { getProfileStatusThunkCreator, getTextStatusTC } from '../../../redux/profile-reducer'

class ProfileStatus extends React.Component {
  state = {
    mod: false
  }

  editmod = () => {
    this.setState({
      mod: true
    })
  }

  deeditmod = () => {
    this.setState({
      mod: false
    })

    //editUserStatus(this.props.status)
    this.props.getProfileStatusThunkCreator(this.props.status)
  }

  onChangeStatus = (e) => {
    this.props.getTextStatusTC(e.target.value)
  }
  

  render() {
    return (
      <div>
        {!this.state.mod ?
          <div onDoubleClick={this.editmod}>{this.props.status}</div>
        :
          <input type='text' autoFocus={true} value={this.props.status} onBlur={this.deeditmod} onChange={this.onChangeStatus} />
        }
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    status: state.post.status,
  }
}

let mapDispatchToProps = {
  getProfileStatusThunkCreator: getProfileStatusThunkCreator,
  getTextStatusTC: getTextStatusTC
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStatus)