import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import Posts from './components/Posts'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Posts} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
