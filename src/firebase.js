import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5raatxM3qD2wFEKRv-ubr3aYjVxNXXCk",
  authDomain: "dnd-react-app-utn.firebaseapp.com",
  projectId: "dnd-react-app-utn",
  storageBucket: "dnd-react-app-utn.appspot.com",
  messagingSenderId: "63460465022",
  appId: "1:63460465022:web:e8e81e00aecaec14d67b2f",
  measurementId: "G-W45EV93T4B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
