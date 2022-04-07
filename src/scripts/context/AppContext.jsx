import {useState, createContext, useContext} from 'react'


export const ModalContext = createContext()
export const AuthContext = createContext()


//let [isUserLogged, setIsUserLogged] = useState(false);

/*
export function getModalContext() {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`)
  }
  return context
}*/
    
    
const modalDataSetup = {
      mode: "sign",
      isModalShowing: false
}

export function AppProvider({children}) {
    let [modalData, setModalData] = useState(modalDataSetup);
    const ModalContextProviderValue = {
      modalData, 
      setModalData
    }
    return (
      <ModalContext.Provider value={ ModalContextProviderValue }>
        <AuthContext.Provider value={{}}>
          { children }
        </AuthContext.Provider>
      </ModalContext.Provider>
    )
}
