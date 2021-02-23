import React, { useEffect } from 'react'

import { RootStore } from './store'
import { useSelector, useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'

const App = () => {
  const dispatch = useDispatch()
  const postsState = useSelector((state: RootStore) => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className='App'>
      {postsState.posts && (
        <>
          {postsState.posts.map((post) => (
            <>
              <p>title: {post.title}</p>
              <p>subreddit: {post.subreddit}</p>
              <p>Num. comments: {post.num_comments}</p>
              <br />
            </>
          ))}
        </>
      )}
    </div>
  )
}

export default App
