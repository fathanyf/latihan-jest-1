import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyDsjl-TtjDYhfNcKZcb_QV4trC2EQXuExM",
  authDomain: "mini-challenge-df3-ch11.firebaseapp.com",
  projectId: "mini-challenge-df3-ch11",
  storageBucket: "mini-challenge-df3-ch11.appspot.com",
  messagingSenderId: "674237352009",
  appId: "1:674237352009:web:fcd10328fcb6e47d945798"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)