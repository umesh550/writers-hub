import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: "blog-project-57299.firebaseapp.com",
  projectId: "blog-project-57299",
  storageBucket: "blog-project-57299.appspot.com",
  messagingSenderId: "417949899014",
  appId: "1:417949899014:web:ac91a488d52228fac2a687",
  measurementId: "G-4DJDEV4NH9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
