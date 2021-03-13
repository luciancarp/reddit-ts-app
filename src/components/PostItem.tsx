import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'

import styled from 'styled-components'

import { spaces } from '../style/global'

const mapStateToProps = (state: RootStore) => ({
  posts: state.posts,
})
const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  title: string
  subreddit: string
  num_comments: number
  author: string
}

const PostItem = ({ posts, title, subreddit, num_comments, author }: Props) => {
  return (
    <Container>
      <Row>
        <h4>{title}</h4>
        <h5>r/{subreddit}</h5>
      </Row>
      <StyledImage
        src='https://via.placeholder.com/1280x720.png/'
        alt='placeholder'
      />
      <Row>
        <h5>by u/{author}</h5>
        <h5>awards</h5>
      </Row>
      <LastRow>
        <h6>Likes</h6>
        <h6>{num_comments} Comments</h6>
        <h6>Share</h6>
        <h6>More</h6>
      </LastRow>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 0 ${spaces.regular} 0;

  background-color: ${(props) => props.theme.highlight};
  border-radius: 30px;
`

const Row = styled.div`
  padding: ${spaces.narrow};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
`

const LastRow = styled.div`
  padding: ${spaces.narrow};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
`

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`

export default connector(PostItem)
