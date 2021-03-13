import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'

import styled from 'styled-components'

import { spaces } from '../style/global'

const mapStateToProps = (state: RootStore) => ({
  posts: state.posts,
})
const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const PostsHeader = ({ posts }: Props) => {
  return (
    <Container>
      <h3>{posts.shownSubreddit}</h3>
      <h3>Hot</h3>
    </Container>
  )
}

const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;

  padding: ${spaces.regular} ${spaces.narrow} ${spaces.regular} ${spaces.narrow};

  background-color: ${(props) => props.theme.background};
  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 0 0 2px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
`

export default connector(PostsHeader)
