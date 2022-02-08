import firebase from "firebase"
// import { initializeApp } from "firebase/app";
// import {getStorage} from"firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAxoDRlj_-yhkrOQaiWUagWoN8mUIKQMF0",
    authDomain: "fir-react-nada.firebaseapp.com",
    projectId: "fir-react-nada",
    storageBucket: "fir-react-nada.appspot.com",
    messagingSenderId: "654793459699",
    appId: "1:654793459699:web:f55667675f189d43277486"
  };
  firebase.initializeApp(firebaseConfig);
 export default firebase
//   export const app = initializeApp(firebaseConfig)
//   const storage = getStorage(a)