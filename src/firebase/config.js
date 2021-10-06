import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDBBOR58WBoWq22cC7_j-uc4nCCzqa-W9Q",
    authDomain: "contact-app-firebase-d7aef.firebaseapp.com",
    projectId: "contact-app-firebase-d7aef",
    storageBucket: "contact-app-firebase-d7aef.appspot.com",
    messagingSenderId: "34033793821",
    appId: "1:34033793821:web:657ae7682a07a165523ff4",
    measurementId: "G-XN1F9T9VZX"
  };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    export default firebase;