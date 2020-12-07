import React, { createRef } from 'react'
import { connect } from 'react-redux'
import {addPostActionCreate, addPostTextActionCreate} from '../../../redux/profile-reducer'
import MyPost from './MyPost'

let mapStateToProps = (state) => {
    return {
        PostData: state.post.PostData,
        newPostText: state.post.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreate())
        },
        updateNewPostText: (text) => {
            dispatch(addPostTextActionCreate(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)

export default MyPostContainer