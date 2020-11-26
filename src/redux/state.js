import React from 'react'

const State = {
  PostData: [
    {id: 1, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост1'},
    {id: 2, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост2'},
    {id: 3, img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1', post: 'Пост3'},
  ],
  dialogData: [
    {id: 'roman', name: 'Роман'},
    {id: 'saroga', name: 'Сарожа'},
    {id: 'borh', name: 'Борщ'},
    {id: 'gril', name: 'Гриля'},
    {id: 'dgov', name: 'Джовани'},
    {id: 'egor', name: 'Егор'},
  ],
  messageData: [
    {id: '1', message: 'Привет'},
    {id: '2', message: 'Как жизнь'},
    {id: '3', message: 'Yo'},
    {id: '4', message: 'Yo'},
    {id: '5', message: 'Yo'},
  ],
}

export let addPost = (PostMess) => {
  let newObj = {
    id: 4,
    img: 'https://sun3-11.userapi.com/c857732/v857732789/5e846/Eo5Njv85rc4.jpg?ava=1',
    post: PostMess
  }
  State.PostData.push(newObj)
  ppp()
}

export default State