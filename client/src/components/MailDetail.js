import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Avatar } from '@material-ui/core'
import {
  MoreVert,
  Forward,
  Launch,
  Print,
  Replay,
  Reply,
  Star,
} from '@material-ui/icons'
import {
  AccordDetails,
  AccordDetailsTopRight,
  AccordTopDetails,
  AccordInfo,
  MailContnetAccordian,
  SenderDateOption,
  SenderInfo,
  SenderInfoDate,
  MailReplyLinks,
  MailReplyLink,
  MailContent,
} from './StyledComponents'
import './../css/index.css'

export const MailDetail = ({ messageDetail }) => {
  return (
    <AccordDetails key={messageDetail.id}>
      <AccordTopDetails>
        <p>{messageDetail.subject}</p>
        <AccordDetailsTopRight>
          <Print />
          <Launch />
        </AccordDetailsTopRight>
      </AccordTopDetails>
      <AccordInfo>
        <Avatar />
        <SenderInfo>
          <h4>
            <small> {messageDetail.from}</small>
          </h4>
          <small>{`To: ${messageDetail.to}`}</small>
        </SenderInfo>
        <SenderInfoDate>
          <SenderDateOption>
            <small>
              {new Date(messageDetail.date).toLocaleTimeString()}
            </small>
            <Star />
            <Reply />
            <MoreVert />
          </SenderDateOption>
        </SenderInfoDate>
      </AccordInfo>
      <MailContent>
        <MailContnetAccordian>
          {ReactHtmlParser(messageDetail.body)}
        </MailContnetAccordian>
        <MailReplyLinks>
          <MailReplyLink>
            <Replay />
            <span>Reply</span>
          </MailReplyLink>
          <MailReplyLink>
            <Forward />
            <span>Forward</span>
          </MailReplyLink>
        </MailReplyLinks>
      </MailContent>
    </AccordDetails>
  )
}
