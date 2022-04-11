import React , { useState } from 'react'
import toast from 'react-hot-toast'
import {
  Close,
  Delete
} from '@material-ui/icons'
import { postSendMessage } from './../service/api'
import {
  ModalHiddenDiv,
  ModalInnerContent,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalAction,
  ModalRecipient,
  ModalInnerDiv,
  HeaderTitle,
  HeaderIcon,
  ButtonDiv,
  DeleteDiv,
  StyledTextArea,
  SendBtn,
  ModalTextArea,
} from './StyledComponents'

export const ModalContainer = ({ showHideModal }) => {
  const [focus, setFocus] = useState(false)
  const [recipient, setRecipient] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')

  const sendMail = async (e) => {
    e.preventDefault();
    if (recipient && subject !== '') {
      try {
        const payload = {
          to: recipient,
          subject: subject,
          content: content,
          date: new Date()
        }
        const response = await postSendMessage(payload)
        showHideModal()
        toast.success(response.responseMessage)
        setSubject('')
        setRecipient('')
        setContent('')
      } catch(e) {
        toast.error(e.responseMessage)
      }
    } else {
      toast.error('Fill all the required data to send email.')
    }
  }

  return (
    <ModalHiddenDiv>
        <ModalInnerDiv>
        <ModalContent role="dialog">
        <ModalHeader>
          <HeaderTitle>
            <span>New Message</span>
          </HeaderTitle>
          <HeaderIcon onClick={showHideModal}>
            <Close />
          </HeaderIcon>
        </ModalHeader>
        <ModalBody>
          <ModalInnerContent>
            <ModalRecipient onClick={() => setFocus(true)}>
              <span>{focus ? "To" : "Recipient"}</span>
              <input
                style={{ marginLeft : '5px'}}
                value={recipient}
                onChange={(event) => setRecipient(event.target.value)}
                type="text"
              />
            </ModalRecipient>
            <ModalRecipient>
              <input
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                type="text"
                placeholder="Subject"
              />
            </ModalRecipient>
            <ModalTextArea>
              <StyledTextArea
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </ModalTextArea>
          </ModalInnerContent>
          <ModalAction>
            <ButtonDiv>
              <SendBtn onClick={sendMail} type="submit">
                Send
              </SendBtn>
            </ButtonDiv>
            <DeleteDiv>
              <Delete />
            </DeleteDiv>
          </ModalAction>
        </ModalBody>
      </ModalContent>
      </ModalInnerDiv>
    </ModalHiddenDiv>
  )
}
