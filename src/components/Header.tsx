import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'

import styled from 'styled-components'

import { setShownSubreddit } from '../actions/posts'

import { spaces } from '../style/global'

const mapStateToProps = (state: RootStore) => ({
  posts: state.posts,
})
const connector = connect(mapStateToProps, { setShownSubreddit })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

const Header = ({ posts, setShownSubreddit }: Props) => {
  const subredditList = [
    { title: 'Popular', subreddit: 'popular' },
    { title: 'All', subreddit: 'all' },
  ]

  const selectSubreddit = (subreddit: string) => {
    setShownSubreddit(subreddit)
  }

  return (
    <Container>
      <ul>
        {subredditList.map((subredditItem) => (
          <Subreddit
            active={posts.shownSubreddit === subredditItem.subreddit}
            onClick={() => selectSubreddit(subredditItem.subreddit)}
          >
            <h3>{subredditItem.title}</h3>
          </Subreddit>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.header`
  position: fixed;

  padding: ${spaces.regular};
`

type SubredditType = {
  active?: boolean
}

const Subreddit = styled.li<SubredditType>`
  padding: ${spaces.narrow};
  margin-bottom: ${spaces.narrow};
  border-radius: 30px;

  background-color: ${(props) => (props.active ? props.theme.highlight : null)};

  cursor: pointer;

  -webkit-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: ${(props) => props.theme.highlight};
  }

  display: flex;
  align-items: center;
  justify-content: center;

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
`

export default connector(Header)
