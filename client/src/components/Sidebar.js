import React from 'react'
import './../css/index.css'
import {
  SideBar,
  SideBarTop,
  SideBarOption,
  SideBarIcons,
  Inbox,
  Trash,
  Sent,
  Drafts,
  Important,
  Starred,
  Spam,
} from './StyledComponents'

export const Sidebar = ({ selectedFolder, showHideModal, sideIconClickHanlder }) => {
  return (
    <SideBar>
      <SideBarTop>
        <SideBarOption onClick={() => showHideModal()}>
          Compose
        </SideBarOption>
        <SideBarIcons
          className={`${selectedFolder === 'inbox' ? 'active' : ''}`}
          onClick={() => sideIconClickHanlder('inbox')}
        >
          <Inbox />
          <div>Inbox</div>
        </SideBarIcons>
        <SideBarIcons
          className={`${selectedFolder === 'starred' ? 'active' : ''}`}
          onClick={() => sideIconClickHanlder('starred')}
        >
            <Starred />
            <div>Starred</div>
        </SideBarIcons>
        <SideBarIcons
          className={`${selectedFolder === 'sent' ? 'active' : ''}`}
          onClick={() => sideIconClickHanlder('sent')}
        >
            <Sent />
            <div>Sent</div>
        </SideBarIcons>
        <SideBarIcons
          className={`${selectedFolder === 'drafts' ? 'active' : ''}`}
          onClick={() => sideIconClickHanlder('drafts')}
        >
            <Drafts />
            <div>Drafts</div>
        </SideBarIcons>
        <SideBarIcons
          className={`${selectedFolder === 'important' ? 'active' : ''}`}
          onClick={() => sideIconClickHanlder('important')}
        >
            <Important />
            <div>Important</div>
        </SideBarIcons>
        <SideBarIcons
          className={`${selectedFolder === 'spam' ? 'active' : ''}`}
          onClick={() => sideIconClickHanlder('spam')}
        >
            <Spam />
            <div>Spam</div>
        </SideBarIcons>
        <SideBarIcons
          className={`${selectedFolder === 'trash' ? 'active' : ''}`}
          onClick={() => sideIconClickHanlder('trash')}
        >
            <Trash />
            <div>Trash</div>
        </SideBarIcons>
      </SideBarTop>
    </SideBar>
  );
}
