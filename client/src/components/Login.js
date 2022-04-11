import React, { useState } from 'react'
import {
  LoginDiv,
  LoginContent,
  LoginContainer,
  LogoContainer,
  StyledInput,
} from './StyledComponents'
import toast from 'react-hot-toast'
import { postLogin } from './../service/api'

export const Login = ({ handleLoginCallback }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateLogin = () => {
    if(email.length > 0 && password.length > 0) {
      return true
    }
    return false
  }
  
  const handleLogin = async() => {
    if (validateLogin()) {
      try{
        const payload = {
          userName: email,
          password: password
        }
        const response = await postLogin(payload)
        window.localStorage.setItem('bearerToken', response.bearerToken)
        window.localStorage.setItem('isUserLoggedIn', true)
        handleLoginCallback()
      } catch {
        toast.error('Wrong username and password')
      }
    } else {
      toast.error('Please enter username and password')
    }
  }

  return (
    <LoginDiv>
      <LoginContainer>
        <LogoContainer>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
            alt="logo"
          />
          <h3>Sign in</h3>
          <p>to continue to Gmail</p>
        </LogoContainer>
        <LoginContent>
          <StyledInput
            value={email}
            required={true}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <StyledInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required={true}
          />

          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </LoginContent>
      </LoginContainer>
    </LoginDiv>
  )
}
