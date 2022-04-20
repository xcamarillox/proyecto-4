import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    setDoc,
    doc
} from 'firebase/firestore/lite';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    getAuth,
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.API_KEY_FIREBASE,
    authDomain: "appetitoso-9c2a8.firebaseapp.com",
    projectId: "appetitoso-9c2a8",
    storageBucket: "appetitoso-9c2a8.appspot.com",
    messagingSenderId: "561731565542",
    appId: "1:561731565542:web:0cfda4e1fc6282a8e40827",
    measurementId: "G-DB28FNHN1Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider;

export const signServerActions = async(mode, email, password) => {
    if (mode == "signUp") return await createUserWithEmailAndPassword(auth, email, password)
    else if (mode == "signIn") return await signInWithEmailAndPassword(auth, email, password)
    else if (mode == "signGoogle") return await signInWithPopup(auth, googleProvider);
    else if (mode == "signForgot") return await sendPasswordResetEmail(auth, email)
    else if (mode == "signOut") return await signOut(auth)
}

export const crudServerActions = async(mode, pathArr, modeArgument) => {
    if (mode == "saveADoc") return await addDoc(collection(db, pathArr.join('/')), modeArgument) // modeArgument = toBeSavedData
    else if (mode == "deleteADoc") return await deleteDoc(doc(db, ...pathArr, modeArgument)) // modeArgument = documentID
    else if (mode == "updateADoc") return await setDoc(doc(db, ...pathArr, modeArgument[0]), modeArgument[1]) // modeArgument = [documentID, toBeSavedData]
    else if (mode == "getMeDocs") return await getDocs(collection(db, pathArr.join('/'))) // No modeArgument needed
}