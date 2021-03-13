export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_LOADING = 'POSTS_LOADING'
export const POSTS_FAIL = 'POSTS_FAIL'

export const SET_SHOWNSUBREDDIT = 'SET_SHOWNSUBREDDIT'

export type PostsActionTypes =
  | { type: 'POSTS_SUCCESS'; payload: PostsType }
  | { type: 'POSTS_LOADING' }
  | { type: 'POSTS_FAIL' }
  | { type: 'SET_SHOWNSUBREDDIT'; payload: string }

export type PostType = {
  subreddit: string
  title: string
  visited: boolean
  num_comments: number
  id: number
  permalink: string
  is_video: boolean
  thumbnail: string
  author: string
}

export type PostsType = [PostType]
