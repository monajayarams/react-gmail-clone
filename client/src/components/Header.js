import React from 'react'
import { Avatar } from '@material-ui/core'
import {
  HeaderContainer,
  Logo,
  AvatarContainer,
  AvatarDiv
} from './StyledComponents'

const Header = ({ handleLogout }) => {
  return (
    <HeaderContainer>
      <Logo>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt="gmailLogo"
        />
      </Logo>
      <AvatarContainer onClick={handleLogout}>
        <AvatarDiv>
          <Avatar />
        </AvatarDiv>
      </AvatarContainer>
    </HeaderContainer>
  )
}

export default Header;
