import { useEffect } from 'react'

import { connect, ConnectedProps } from 'react-redux'
import { getPosts } from '../actions/posts'
import { PostType } from '../actions/types'
import { RootStore } from '../store'
import ThemeSwitcher from './ThemeSwitcher'

const mapStateToProps = (state: RootStore) => ({
  posts: state.posts,
})
const connector = connect(mapStateToProps, { getPosts })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Posts = ({ getPosts, posts }: Props) => {
  useEffect(() => {
    getPosts(posts.shownSubreddit)
  }, [getPosts, posts.shownSubreddit])

  return (
    <div>
      <ThemeSwitcher />
      {posts.posts && (
        <>
          {posts.posts.map((post: PostType) => (
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

export default connector(Posts)
