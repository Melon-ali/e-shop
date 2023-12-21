// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpc1SgmJmDux4StON1Ks5a7W-Q0xU40sg",
  authDomain: "e-shop-7ab81.firebaseapp.com",
  projectId: "e-shop-7ab81",
  storageBucket: "e-shop-7ab81.appspot.com",
  messagingSenderId: "227783847710",
  appId: "1:227783847710:web:8beafbf25892e2db7d630f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;