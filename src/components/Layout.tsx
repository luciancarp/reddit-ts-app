import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'

import Header from './Header'

const mapStateToProps = (state: RootStore) => ({
  posts: state.posts,
})
const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & { children?: React.ReactNode }

const Layout = ({ posts, children }: Props) => {
  return (
    <Container>
      <Header />
      {posts.posts && <p>Number of posts: {posts.posts.length}</p>}
      <main>{children}</main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default connector(Layout)
