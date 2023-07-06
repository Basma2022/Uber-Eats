import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw6A2kaLNOULKWKXThfVeu2u7HYt7II_s",
  authDomain: "uber-eats-6e935.firebaseapp.com",
  projectId: "uber-eats-6e935",
  storageBucket: "uber-eats-6e935.appspot.com",
  messagingSenderId: "817291813746",
  appId: "1:817291813746:web:631ac5768edeaf91f633eb",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
