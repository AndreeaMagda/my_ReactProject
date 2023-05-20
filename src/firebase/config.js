// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth'
import  {getFirestore} from 'firebase/firestore'
import  {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXtdJsZA1a6SujuYLiGVl5YNS3_-nX0c8",
  authDomain: "harrypotter-shop.firebaseapp.com",
  projectId: "harrypotter-shop",
  storageBucket: "harrypotter-shop.appspot.com",
  messagingSenderId: "582559441259",
  appId: "1:582559441259:web:9b9f02202e12108f1a2c2e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db =getFirestore(app);
export const storage=getStorage(appo);

export default app