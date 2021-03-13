import styled from 'styled-components'

import { spaces } from '../style/global'

const PostItemPlaceholder = () => {
  return (
    <Container>
      <Placeholder>
        <Row>
          <h4>Title</h4>
          <h5>r/</h5>
        </Row>
        <StyledImage
          src='https://via.placeholder.com/1280x720.png/'
          alt='placeholder'
        />
        <Row>
          <h5>by u/</h5>
          <h5>awards</h5>
        </Row>
        <LastRow>
          <h6>Likes</h6>
          <h6>Comments</h6>
          <h6>Share</h6>
          <h6>More</h6>
        </LastRow>
      </Placeholder>
    </Container>
  )
}

const Container = styled.div`
  padding: ${spaces.wide};
`

const Placeholder = styled.div`
  margin: 0 0 4rem 0;

  background-color: ${(props) => props.theme.item};
  border-radius: 30px;
  box-shadow: 12px 12px 20px 6px ${(props) => props.theme.secondShadow},
    -8px -8px 20px 6px ${(props) => props.theme.firstShadow};
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

export default PostItemPlaceholder
