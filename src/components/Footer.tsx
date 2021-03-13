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

const Footer = ({ posts }: Props) => {
  return (
    <Container>
      <h3>Hot</h3>
    </Container>
  )
}

const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;

  width: 300px;
  padding: ${spaces.regular};
  padding-left: ${spaces.wide};
`

export default connector(Footer)
