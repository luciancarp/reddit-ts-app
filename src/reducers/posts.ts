import {
  POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_FAIL,
  PostsActionTypes,
  PostType,
} from '../actions/types'

type InitialStateType = {
  loading: boolean
  posts?: [PostType]
}

const initialState: InitialStateType = {
  loading: false,
}

const postsReducer = (
  state: InitialStateType = initialState,
  action: PostsActionTypes
): InitialStateType => {
  switch (action.type) {
    case POSTS_FAIL:
      return {
        loading: false,
      }
    case POSTS_LOADING:
      return {
        loading: true,
      }
    case POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      }

    default:
      return state
  }
}

export default postsReducer
