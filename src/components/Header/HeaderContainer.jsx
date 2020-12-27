import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        email: state.auth.email,
        id: state.auth.id,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, null)(HeaderContainer)