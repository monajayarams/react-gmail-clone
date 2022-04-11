import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 40px;
  border-bottom: 1px solid rgba(114, 110, 110, 0.25);
`
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    height: 40px;
  }
`
export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`
export const AvatarDiv = styled.div`
  display: flex;
  cursor: pointer;

  > .MuiSvgIcon-root {
    color: rgba(47, 48, 48, 0.8);
    font-size: x-large;
    padding: 10px;
    cursor: pointer;
  }
`
export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomePageContent = styled.div`
  display: flex;
  height: 90vh;
`
export const TopBarIconDiv = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  cursor: pointer;
`
export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
  flex: 0.90;
`
export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100;
  height: 50px;
  border-bottom: .5px solid rgba(114, 110, 110, 0.25);
  > .MuiSvgIcon-root {
    margin-left: 10px;
    color: rgba(47, 48, 48, 0.7);
  }
`
export const MailContainerDiv = styled.div`
  overflow: scroll;
  -ms-overflow-style: none;
`
export const Accordion = styled.div`
  border-radius: 2px;
  padding: 10px;
  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%);
  display: flex;
  position: relative;
  background: rgba(242,245,245,0.8);
  color: #202124;
  cursor: pointer;
`
export const AccordionTitle = styled.div`
  width: 15%;
`
export const AccordionContent = styled.div`
  width: 85%;
`
export const AccordDetails = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: rgba(253, 253, 253, 0.6);
  box-shadow: 1px 5px 5px;
  border-radius: 3px;
`
export const AccordTopDetails = styled.div`
  display: flex;
  align-items: center;
  > p {
    font-weight: 500;
    margin: 10px 60px;
  }
`
export const AccordDetailsTopRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  > .MuiSvgIcon-root {
    color: rgba(63, 62, 62, 0.7);
    margin-right: 20px;
  }
`
export const AccordInfo = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 5px;
`
export const SenderInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
  > h4 {
    font-size: 1.1rem;
  }
  > h4 > small {
    color: rgb(42, 42, 42);
    font-weight: normal;
  }
`
export const SenderInfoDate = styled.div`
  margin-right: 10px;
  display: flex;
`
export const MailContnetAccordian = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  flex: 1;
  min-height: 100px;
`
export const MailReplyLinks = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 10px;
`
export const MailReplyLink = styled.div`
  display: flex;
  margin-right: 20px;
  padding: 6px 18px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  > a {
    text-decoration: none;
    color: rgba(63, 62, 62, 0.8);
    font-weight: 500;
    margin-left: 5px;
  }
  : hover {
    background-color: rgba(224, 224, 224, 0.9);
  }
`
export const SenderDateOption = styled.div`
  display: flex;
  align-items: center;
  > .MuiSvgIcon-root {
    margin-left: 10px;
  }
`
export const MailContent = styled.div`
  margin: 10px 0 0 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  flex: 0.1;
  border-right: 0.5px solid rgba(49, 48, 48, 0.7);
`
export const SideBarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`
export const SideBarIcons = styled.div`
  cursor: pointer;
  height: 32px;
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  > img {
    padding: 5px;
    opacity: 0.6;
  }
  :hover {
    border-radius: 5px;
    transition: 0.25s ease-in-out;
    background-color: #e8eaed;;
  }
`
export const SideBarOption = styled.div`
  margin-bottom: 10px;
  border-radius: 24px;
  color: #d93025;
  height: 48px;
  padding: 0 24px 0 0;
  min-width: 96px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  letter-spacing: .25px;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  > img {
    padding: 8px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 1px 3px 5px rgba(65, 63, 63, 0.35);
    cursor: pointer;
  }
  ::before {
    background-image: url(https://ssl.gstatic.com/ui/v1/icons/mail/rfr/create_gm_red_24_2x.png);
    -webkit-background-size: 24px;
    background-size: 24px;
    height: 48px;
    min-width: 56px;
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    display: block;
  }
`
export const ModalRecipient = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 5px;
  border-bottom: 2px solid rgba(114, 110, 110, 0.25);
  > p {
    margin-right: 10px;
    color: #333;
  }
  > input {
    outline: none;
    width: 100%;
    border: none;
  }
`
export const ModalHiddenDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 3;
  width: 515px;
  height: 551px;
  order: 1;
  z-index: 1000;
`
export const ModalInnerDiv = styled.div`
  position: absolute;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
`
export const ModalContent = styled.div`
  height: 100%;
  font-size: small;
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow:
    0px 8px 10px 1px rgb(0 0 0 / 14%),
    0px 3px 14px 2px rgb(0 0 0 / 12%),
    0px 5px 5px -3px rgb(0 0 0 / 20%);
`
export const ModalHeader = styled.div`
  border-radius: 8px 8px 0 0;
  float: none;
  background: #404040;
  padding: 5px 10px;
  height: 35px;
  display: flex;
`
export const ModalBody = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  overflow: hidden;
  height: calc(100% - 45px);
  border-bottom: none;
  border-radius: 0px 0px 4px 4px;
`
export const ModalInnerContent = styled.div`
  height: 88%;
  padding: 0 16px;
  background-color: transparent;
  font-size: .875rem;
  color: #222;
`
export const ModalAction = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
  bottom: 0!important;
  background: #fff;
  border-top: 1px solid rgba(114, 110, 110, 0.25);
  bottom: 0;
`
export const HeaderTitle = styled.div`
  margin-left: 16px;
  font-weight: 500;
  padding-bottom: 10px;
  padding-top: 10px;
  height: auto;
  line-height: 15px;
  padding-left: 0;
  padding-right: 0;
  color: white;
  width: 90%;
`
export const HeaderIcon = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  > .MuiSvgIcon-root {
    color: white;
    width: 24px;
    height: 24px;
  }
`
export const StyledTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  outline: none;
  border: transparent !important;
  font-size: small;
  line-height: 1.5;
  font-family: Arial,Helvetica,sans-serif;
  padding: 5px;
  resize: none;
  :focus {
    outline: none;
  }
`
export const SendBtn = styled.button`
  max-width: 104px;
  min-width: 72px;
  height: 36px;
  padding: 0 16px;
  background-color: #1a73e8;
  color: #fff;
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  margin-left: 10px;
`
export const ButtonDiv = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const DeleteDiv = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const ModalTextArea = styled.div`
  height: calc(100% - 75px);
  width: 100%;
  margin-top: 10px;
`
export const Starred = styled.div`
  ::before{
    background-image: url(https://www.gstatic.com/images/icons/material/system_gm/2x/star_border_black_20dp.png);
    content: '';
    display: block;
    -webkit-background-size: 24px;
    background-size: 24px;
    height: 24px;
    min-width: 50px;
    background-position: center;
    background-repeat: no-repeat;
  }
`
export const Drafts = styled.div`
  ::before{
    background-image: url(https://www.gstatic.com/images/icons/material/system_gm/2x/insert_drive_file_black_20dp.png);
    content: '';
    display: block;
    -webkit-background-size: 24px;
    background-size: 24px;
    height: 24px;
    min-width: 50px;
    background-position: center;
    background-repeat: no-repeat;
  }
`
export const Spam = styled.div`
  ::before{
    background-image: url(https://www.gstatic.com/images/icons/material/system_gm/2x/report_black_20dp.png);
    content: '';
    display: block;
    -webkit-background-size: 24px;
    background-size: 24px;
    height: 24px;
    min-width: 50px;
    background-position: center;
    background-repeat: no-repeat;
  }
`
export const Trash = styled.div`
  ::before{
    background-image: url(https://www.gstatic.com/images/icons/material/system_gm/2x/delete_black_20dp.png);
    content: '';
    display: block;
    -webkit-background-size: 24px;
    background-size: 24px;
    height: 24px;
    min-width: 50px;
    background-position: center;
    background-repeat: no-repeat;
  }
`
export const Important = styled.div`
  ::before{
    background-image: url(https://www.gstatic.com/images/icons/material/system_gm/2x/label_important_outline_black_20dp.png);
    content: '';
    display: block;
    -webkit-background-size: 24px;
    background-size: 24px;
    height: 24px;
    min-width: 50px;
    background-position: center;
    background-repeat: no-repeat;
  }
`
export const Inbox = styled.div`
  ::before{
    background-image: url(https://www.gstatic.com/images/icons/material/system/2x/inbox_black_20dp.png);
    -webkit-background-size: 24px;
    background-size: 24px;
    height: 24px;
    min-width: 50px;
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    display: block;
  }
`
export const Sent = styled.div`
  ::before{
    background-image: url(https://www.gstatic.com/images/icons/material/system_gm/2x/send_black_20dp.png);
    -webkit-background-size: 24px;
    background-size: 24px;
    height: 24px;
    min-width: 50px;
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    display: block;
  }
`
export const SidebarOptions = styled.div`
  margin-top: 10px;
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 350px;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 1px 5px 10px;
  > p {
    margin-top: 13px;
    color: #000;
    cursor: pointer;
    padding: 5px 15px;
    font-size: 1rem;
    font-weight: 500;
  }
  > p:hover {
    background-color: rgba(238, 227, 227, 0.938);
    width: fit-content;
    border-radius: 4px;
    text-decoration: underline blue;
  }
`
export const LoginContent = styled.form`
  display: flex;
  flex-direction: column;
  > input {
    padding: 15px;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid lightgray;
    background-color: transparent;
    color: #000;
    border-radius: 5px;
    font-size: 1.1rem;
  }
  > button {
    margin-top: 10px;
    padding: 10px;
    background-color: #1a73e8;
    color: white;
    outline: none;
    border-radius: 5px;
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
  }
  > button:hover {
    background-color: #1268d8;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > img {
    margin-left: 15%;
  }
  > h3 {
    font-size: 2rem;
    font-weight: 500;
  }
  
  > p {
    margin-top: 10px;
    color: black;
    font-size: 1.1rem;
    margin-bottom: 10px;
    text-align: center;
  }
`
export const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`
export const StyledInput = styled.input`
  ::placeholder {
    color: rgb(224, 219, 219);
  }
`
