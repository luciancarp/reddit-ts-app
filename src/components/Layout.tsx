import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'

import Header from './Header'

import { spaces } from '../style/global'

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
      <Content>{children}</Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Content = styled.main`
  margin: 0 auto;

  max-width: 900px;

  padding-top: ${spaces.regular};
`

export default connector(Layout)
