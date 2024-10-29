import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyAeNu4d2KhPFT9lSgmHWHGHM-37he-vNSo",
  authDomain: "login-auth-7d5ff.firebaseapp.com",
  databaseURL: "https://login-auth-7d5ff-default-rtdb.firebaseio.com",
  projectId: "login-auth-7d5ff",
  storageBucket: "login-auth-7d5ff.appspot.com",
  messagingSenderId: "386391970939",
  appId: "1:386391970939:web:47150ca37a88216f9e3ede",
  measurementId: "G-VNN2600GVC",
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();
