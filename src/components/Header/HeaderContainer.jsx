import React from 'react'
import { addUserDataThunk } from '../../redux/auth-reducer'
import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.addUserDataThunk()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // }).then(response => {
        //     if(response.data.resultCode === 0) {
        //         this.props.setUsersData(response.data.data)
        //     } 
        // })
    }   

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


let mapDispatchToProps = {
    addUserDataThunk: addUserDataThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)