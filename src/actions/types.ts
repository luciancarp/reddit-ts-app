export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_LOADING = 'POSTS_LOADING'
export const POSTS_FAIL = 'POSTS_FAIL'

export type PostsActionTypes =
  | { type: 'POSTS_SUCCESS'; payload: [PostType] }
  | { type: 'POSTS_LOADING' }
  | { type: 'POSTS_FAIL' }

export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}
