import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import {
  Refresh,
  ArrowBack,
} from '@material-ui/icons'
import { MailCard } from './MailCard'
import { MailDetail } from './MailDetail'
import {
  TopBarIconDiv,
  MailContainerDiv,
  ContainerBody,
  TopBar,
} from './StyledComponents'
import { getMessagesList, getMessageDetail } from './../service/api'

export const MailContainer = ({selectedFolder}) => {
  const [messageList, setMessageList] = useState([])
  const [messageDetail, setMessageDetail] = useState()
  const [showMessageList, setShowMessageList] = useState(true)

  useEffect(() => {
    const getMessageList = async() => {
      try{
        const result = await getMessagesList(selectedFolder)
        setMessageDetail(undefined)
        setMessageList(result)
        setShowMessageList(true)
      } catch (e) {
        toast.error(e.message)
      }
    }

    if(setShowMessageList){
      getMessageList()
    }
  }, [selectedFolder])

  const showMessageDetailHandler = async (messageId) => {
    try{
      const result = await getMessageDetail(messageId)
      setMessageDetail(result)
      setShowMessageList(false)
    } catch(e) {
      toast.error(e.message)
    }
  }

  return (
    <ContainerBody>
      <TopBar>
        {showMessageList && (
          <TopBarIconDiv onClick={() => setShowMessageList(true)}>
            <Refresh />
          </TopBarIconDiv>
        )}
        {!showMessageList && (
          <TopBarIconDiv onClick={() => setShowMessageList(true)}>
            <ArrowBack />
          </TopBarIconDiv>
        )}
      </TopBar>
      <MailContainerDiv>
        <div>
          {showMessageList && (
            <MailCard messageList={messageList} showMessageDetailHandler={showMessageDetailHandler} />
          )}
          {!showMessageList && (
            <MailDetail messageDetail={messageDetail} />
          )}
        </div>
      </MailContainerDiv>
    </ContainerBody>
  )
}
