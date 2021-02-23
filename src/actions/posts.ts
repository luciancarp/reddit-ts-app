import { Dispatch } from 'redux'
import {
  POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_FAIL,
  PostsActionTypes,
} from './types'
import axios from 'axios'

export const getPosts = () => async (dispatch: Dispatch<PostsActionTypes>) => {
  try {
    dispatch({
      type: POSTS_LOADING,
    })

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    dispatch({
      type: POSTS_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: POSTS_FAIL,
    })
  }
}
