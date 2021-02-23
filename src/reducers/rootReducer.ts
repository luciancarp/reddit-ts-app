import { combineReducers } from 'redux'
import postsReducer from './posts'

const rootReducer = combineReducers({
  posts: postsReducer,
})

export default rootReducer
