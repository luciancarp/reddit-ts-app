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

    const res = await axios.get(`https://www.reddit.com/r/popular.json`)

    const posts = res.data.data.children.map((post: any) => ({
      subreddit: post.data.subreddit,
      title: post.data.title,
      visited: post.data.visited,
      num_comments: post.data.num_comments,
      id: post.data.id,
      permalink: post.data.permalink,
      is_video: post.data.is_video,
      thumbnail: post.data.thumbnail,
    }))

    dispatch({
      type: POSTS_SUCCESS,
      payload: posts,
    })
  } catch (e) {
    dispatch({
      type: POSTS_FAIL,
    })
  }
}
