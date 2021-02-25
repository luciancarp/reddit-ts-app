import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'

const mapStateToProps = (state: RootStore) => ({
  posts: state.posts,
})
const connector = connect(mapStateToProps, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Header = ({ posts }: Props) => {
  return (
    <header>
      <ul>
        <li>
          <h3>Home</h3>
        </li>
        <li>
          <h3>Home</h3>
        </li>
        <li>
          <h3>Home</h3>
        </li>
        <li>
          <h3>Home</h3>
        </li>
        <li>
          <h3>Home</h3>
        </li>
        <li>
          <h3>Home</h3>
        </li>
      </ul>
    </header>
  )
}

export default connector(Header)
