import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from './StyledComponents'
import './../css/index.css'

export const MailCard = ({messageList, showMessageDetailHandler}) => {
  return (
    <div className="mailCards">
      {messageList.length > 0 && messageList.map(({ messageId, from, subject }) =>
        <Accordion key={messageId} onClick={() => showMessageDetailHandler(messageId)}>
          <AccordionTitle>{from}</AccordionTitle>
          <AccordionContent>{subject}</AccordionContent>
        </Accordion>
      )}
    </div>
  )
}
