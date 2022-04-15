import {useState, createContext, useContext, useEffect} from 'react'
import {auth} from "../firebase-aux"
import { onAuthStateChanged } from 'firebase/auth'
import { makeAToast } from '../toast-maker'

export const ModalContext = createContext() // createContext({ modalData: {}, setModalData: ()=>{} })
export const AuthContext = createContext()

export function getContextType(type = 'no-context') {
  let context; 
  if (type == "ModalContext") context = useContext(ModalContext)
  else if (type == "AuthContext") context = useContext(AuthContext)
  if (!context) throw new Error(`The context ${type} must be used within AppProvider`)
  return context
}

export function AppProvider({children}) {
    let [modalData, setModalData] = useState({ isModalShowing: false });
    let [bookingData, setBookingData] = useState();
    let [currentUser, setCurrentUser] = useState();
  
    useEffect(() => {
      onAuthStateChanged(auth, (user)=>{
        setCurrentUser(user);
      })
    }, []);

    const makeABooking = () => {
      const mode = currentUser ? "createBooking" : "sign";
      setModalData({ isModalShowing: !modalData.isModalShowing, modalMode: mode })
      if (!currentUser) makeAToast('i', 'Accede y reserva');
    }

    const makeASign = () => {
      setModalData({ isModalShowing: !modalData.isModalShowing, modalMode: "sign" });
    }

    //**************** PROVIDED DATA *******************//
    const modalContextProviderValue = {
      modalData, 
      setModalData,
      bookingData,
      setBookingData,
      makeABooking,
      makeASign
    }
    const authContextProviderValue = {
      currentUser
    }
    //**************** PROVIDED DATA *******************//
  
    return (
      <ModalContext.Provider value={ modalContextProviderValue }>
        <AuthContext.Provider value={ authContextProviderValue }>
          { children }
        </AuthContext.Provider>
      </ModalContext.Provider>
    )
}
