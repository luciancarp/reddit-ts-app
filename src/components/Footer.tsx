import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'

import styled from 'styled-components'

import ThemeSwitcher from './ThemeSwitcher'

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
      <Row>
        <ThemeSwitcher />
        <h5>Made by Lucian Carp © {new Date().getFullYear()}</h5>
      </Row>
    </Container>
  )
}

const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;

  width: 300px;
  margin: 3rem 0 0 3rem;
  padding: ${spaces.regular};

  background-color: ${(props) => props.theme.item};

  border-radius: 30px;
  box-shadow: 12px 12px 20px 6px ${(props) => props.theme.secondShadow},
    -8px -8px 16px 3px ${(props) => props.theme.firstShadow};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default connector(Footer)
