import {useState, createContext, useContext, useEffect} from 'react'
import {auth} from "../firebase-setup"
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

export const ModalContext = createContext() // createContext({ modalData: {}, setModalData: ()=>{} })
export const AuthContext = createContext()

export function getContextType(type = 'no-context') {
  let context; 
  if (type == "ModalContext") context = useContext(ModalContext)
  else if (type == "AuthContext") context = useContext(AuthContext)
  if (!context) throw new Error(`The context ${type} must be used within AppProvider`)
  return context
}

const signActions = async (mode, email, password) => { 
    if (mode == "signUp") await createUserWithEmailAndPassword(auth, email, password)
    else if (mode == "signIn") await signInWithEmailAndPassword(auth, email, password)
    else if (mode == "signOut") await signOut(auth)
}

const modalDataSetup = {
  modalMode: "sign",
  isModalShowing: false
}

export function AppProvider({children}) {
    let [modalData, setModalData] = useState(modalDataSetup);
    let [currentUser, setCurrentUser] = useState(null);
  
    useEffect(() => {
      onAuthStateChanged(auth, (user)=>{
        console.log(user);
        setCurrentUser(user);
      })
    }, []); 

    const modalContextProviderValue = {
      modalData, 
      setModalData
    }
    const authContextProviderValue = {
      signActions, 
      currentUser
    }
  
    return (
      <ModalContext.Provider value={ modalContextProviderValue }>
        <AuthContext.Provider value={ authContextProviderValue }>
          { children }
        </AuthContext.Provider>
      </ModalContext.Provider>
    )
}
