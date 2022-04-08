import {useState, createContext, useContext} from 'react'
import {auth} from "../firebase-setup"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'


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

const signFunction = (mode, email, password) => { 
  if (mode == "signUp") createUserWithEmailAndPassword(auth, email, password)
  else if (mode == "signIn") signInWithEmailAndPassword(auth, email, password)
}

export function AppProvider({children}) {
    let [modalData, setModalData] = useState(modalDataSetup);
    let [userAuth, setUseAuth] = useState({userAuthSetup});

    const modalContextProviderValue = {
      modalData, 
      setModalData
    }
  
    return (
      <ModalContext.Provider value={ modalContextProviderValue }>
        <AuthContext.Provider value={ signFunction }>
          { children }
        </AuthContext.Provider>
      </ModalContext.Provider>
    )
}
