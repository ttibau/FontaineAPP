import React from 'react'
import { Provider } from 'react-redux'
import store from './app/store/index'
import Router from './app/routes/router'

const App = () => {
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  )
}

export default App;
