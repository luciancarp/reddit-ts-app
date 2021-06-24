import { useEffect } from 'react'

import { connect, ConnectedProps } from 'react-redux'
import { getPosts } from '../actions/posts'
import { PostType } from '../actions/types'
import { RootStore } from '../store'

import styled from 'styled-components'

import PostsHeader from './PostsHeader'
import PostItem from './PostItem'
import PostItemPlaceholder from './PostItemPlaceholder'

import { spaces } from '../style/global'

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
    <Container>
      <PostsHeader />
      {!posts.loading && (
        <PostsContainer>
          {posts.posts && (
            <>
              {posts.posts.map((post: PostType) => (
                <PostItem
                  title={post.title}
                  subreddit={post.subreddit}
                  num_comments={post.num_comments}
                  author={post.author}
                />
              ))}
            </>
          )}
        </PostsContainer>
      )}

      {posts.loading && (
        <>
          <PostItemPlaceholder />
          <PostItemPlaceholder />
        </>
      )}
    </Container>
  )
}

const Container = styled.div``

const PostsContainer = styled.div`
  padding: ${spaces.wide};
  margin: ${spaces.wide} 0 ${spaces.wide} 0;
`

export default connector(Posts)
