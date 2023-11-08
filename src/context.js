import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

// set up logic in the provider
const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook - to reduce the amount of imports per component(useContext, AppContext)
// either create it as a component (capital first letter)
// or as a custom hook with prefix use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
