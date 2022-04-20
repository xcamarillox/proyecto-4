import { useState, createContext, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { makeAToast } from '../toast-maker';
import { auth } from "../firebase-aux";

export const ModalContext = createContext();
export const AuthContext = createContext();
export function getContextType(type = 'no-context') {
  let context; 
  if (type == "ModalContext") context = useContext(ModalContext);
  else if (type == "AuthContext") context = useContext(AuthContext);
  if (!context) throw new Error(`The context ${type} must be used within AppProvider`);
  return context;
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

    const makeABooking = initObj => {
      const mode = currentUser ? "createBooking" : "sign";
      setModalData({ isModalShowing: true, modalMode: mode, initObj:initObj })
      if (!currentUser) makeAToast('i', 'Accede y reserva');
    }
    const makeASign = () => setModalData({ isModalShowing: !modalData.isModalShowing, modalMode: "sign" });
    const showBookingsList = () => setModalData({ isModalShowing: !modalData.isModalShowing, modalMode: "listBookings" });
    
    //**************** PROVIDED DATA *******************//
    const modalContextProviderValue = {
      modalData, 
      setModalData,
      bookingData,
      setBookingData,
      makeABooking,
      makeASign,
      showBookingsList
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
