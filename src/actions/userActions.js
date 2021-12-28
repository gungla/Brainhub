import { FETCH_USERS, NEW_USER } from './types'
import Swal from 'sweetalert2'

export const fetchUsersInfo = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:3001/users')
    const users = await res.json()
    dispatch({
      type: FETCH_USERS,
      payload: users,
    })
  } catch (error) {
    console.log('throwing Error', error)
    throw error
  }
}

export const createUserInfo = (postData) => async (dispatch) => {
  try {
    const post = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    })

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your event has been saved',
      showConfirmButton: false,
      timer: 1500
    })

    const user = await post.json()
    dispatch({
      type: NEW_USER,
      payload: user,
    })
  } catch (error) {

    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      showConfirmButton: false,
      timer: 1500
    })

    console.log('throwing Error', error)
    throw error
  }
}
