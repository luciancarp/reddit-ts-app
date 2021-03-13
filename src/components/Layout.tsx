import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'

import Header from './Header'
import Footer from './Footer'

// import { spaces } from '../style/global'

const mapStateToProps = (state: RootStore) => ({
  posts: state.posts,
})
const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & { children?: React.ReactNode }

const Layout = ({ posts, children }: Props) => {
  return (
    <Container>
      <div>
        <Header />
      </div>
      <StyledMain>
        <Content>{children}</Content>
        <Footer />
      </StyledMain>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledMain = styled.main`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 700px;
`

export default connector(Layout)
