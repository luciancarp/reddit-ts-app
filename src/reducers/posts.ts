import {
  POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_FAIL,
  SET_SHOWNSUBREDDIT,
  PostsActionTypes,
  PostsType,
} from '../actions/types'

type InitialStateType = {
  loading: boolean
  posts?: PostsType
  shownSubreddit: string
}

const initialState: InitialStateType = {
  loading: false,
  shownSubreddit: 'popular',
}

const postsReducer = (
  state: InitialStateType = initialState,
  action: PostsActionTypes
): InitialStateType => {
  switch (action.type) {
    case POSTS_FAIL:
      return {
        ...state,
        loading: false,
      }
    case POSTS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      }
    case SET_SHOWNSUBREDDIT:
      return {
        ...state,
        shownSubreddit: action.payload,
      }
    default:
      return state
  }
}

export default postsReducer
