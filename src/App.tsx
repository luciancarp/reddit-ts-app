import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import { ThemeProvider } from './style/Theme'
import GlobalStyle from './style/GlobalStyle'

import Posts from './components/Posts'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path='/' component={Posts} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
