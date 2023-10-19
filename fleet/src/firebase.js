// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-RP7YyygqweXMYcHV_Sq9O_1cNc2KIMQ",
  authDomain: "fleet-management-5c546.firebaseapp.com",
  projectId: "fleet-management-5c546",
  storageBucket: "fleet-management-5c546.appspot.com",
  messagingSenderId: "321647394572",
  appId: "1:321647394572:web:84f599da97a90a99675329",
  measurementId: "G-5190F47052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);