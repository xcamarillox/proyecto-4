import {useState, createContext, useContext} from 'react'


export const ModalContext = createContext() // createContext({ modalData: {}, setModalData: ()=>{} })
export const AuthContext = createContext()

export function getModalContext() {
  const context = useContext(ModalContext)
  if (!context) throw new Error(`ModalContext must be used within a AppProvider`)
  return context
}
export function getAuthContext() {
  const context = useContext(AuthContext)
  if (!context) throw new Error(`AuthContext must be used within a AppProvider`)
  return context
}
      
const modalDataSetup = {
  modalMode: "sign",
  isModalShowing: false
}
const userAuthSetup = {
  user: "",
  isAuthenticated: false
}

export function AppProvider({children}) {
    let [modalData, setModalData] = useState(modalDataSetup);
    let [userAuth, setUseAuth] = useState({userAuthSetup});

    const modalContextProviderValue = {
      modalData, 
      setModalData
    }
    const userAuthProviderValue = {
      userAuth, 
      setUseAuth
    }
    return (
      <ModalContext.Provider value={ modalContextProviderValue }>
        <AuthContext.Provider value={ userAuthProviderValue }>
          { children }
        </AuthContext.Provider>
      </ModalContext.Provider>
    )
}
