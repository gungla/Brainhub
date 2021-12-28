import React from 'react'
import './App.css'
import { Provider } from 'react-redux'

import Users from './components/Users'
import UserInfo from './components/UserInfo'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="container col-md-6 mt-4">
        <h1>New Event</h1>
        <UserInfo />
        <Users />
      </div>
    </Provider>
  )
}

export default App
