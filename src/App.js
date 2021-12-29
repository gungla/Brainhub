import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'

import Users from './components/Users'
import UserInfo from './components/UserInfo'
import store from './store'
import Loader from './components/Loader'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <Provider store={store}>
      <div className="container col-md-6 mt-4">
        {loading && <Loader/>} 
        {!loading && (
          <>
          <h1>New Event</h1>
          <UserInfo />
          <Users />
          </>
        )}
      </div>
    </Provider>
  )
}

export default App
