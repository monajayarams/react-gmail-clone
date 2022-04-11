import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './Header'
import { Sidebar } from './Sidebar'
import { MailContainer } from './Mail'
import { ModalContainer } from './Modal'
import { HomePageContainer, HomePageContent } from './StyledComponents'


export const HomePage = ({ handleLogout }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFolder, setSelectedFolder] = useState('inbox')

  const sideIconClickHanlder = (name) => {
    setSelectedFolder(name)
  }
  const showHideModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <HomePageContainer>
      <Header handleLogout={handleLogout} />
      <HomePageContent>
        <Toaster
          toastOptions={{
            duration: 5000,
            success: {
              iconTheme: {
                primary: 'gray',
                secondary: 'white',
              },
            },
            error: {
              iconTheme: {
                primary: 'red',
                secondary: 'white',
              },
            },
          }}
        />
        <Sidebar
          selectedFolder={selectedFolder}
          showHideModal={showHideModal}
          sideIconClickHanlder={sideIconClickHanlder}
        />
        <MailContainer selectedFolder={selectedFolder} />
        {modalOpen && <ModalContainer showHideModal={showHideModal}/>}
      </HomePageContent>
    </HomePageContainer>
  );
}
