import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider;

export const signServerActions = async(mode, email, password) => {
    if (mode == "signUp") await createUserWithEmailAndPassword(auth, email, password)
    else if (mode == "signIn") await signInWithEmailAndPassword(auth, email, password)
    else if (mode == "signGoogle") await signInWithPopup(auth, googleProvider);
    else if (mode == "signForgot") await sendPasswordResetEmail(auth, email)
    else if (mode == "signOut") await signOut(auth)
}

export const saveADoc = async(pathArr, toBeSavedData) => await addDoc(collection(db, pathArr.join('/')), toBeSavedData)
export const deleteADoc = async(pathArr, documentID) => await deleteDoc(doc(db, ...pathArr, documentID))
export const getMeDocs = async(pathArr) => await getDocs(collection(db, pathArr.join('/')))