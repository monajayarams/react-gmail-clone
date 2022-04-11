import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { HomePage } from './components/HomePage'
import { Login } from './components/Login'

const Conatiner = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  min-height: fit-content;
  min-width: fit-content;
`

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const login = window.localStorage.getItem('isUserLoggedIn')
    const token = window.localStorage.getItem('bearerToken')
    if(login && token) {
      setLoggedIn(true)
    }
  },[])

  const handleLogout = () => {
    window.localStorage.removeItem('isUserLoggedIn')
    window.localStorage.removeItem('bearerToken')
    setLoggedIn(false)
  }

  const handleLogin = () => {
    setLoggedIn(true)
  }
  return (
    <Conatiner>
      {isLoggedIn && 
        <HomePage handleLogout={handleLogout} /> 
      }
      {!isLoggedIn && 
        <Login handleLoginCallback={handleLogin} />
      }
    </Conatiner>
  )
}

export default App
