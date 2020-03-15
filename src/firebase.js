import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyDGfXvfZG_uTH5nkO5vCKjylfpSDMD9l98",
  authDomain: "socialproject-b3f1f.firebaseapp.com",
  databaseURL: "https://socialproject-b3f1f.firebaseio.com",
  projectId: "socialproject-b3f1f",
  storageBucket: "socialproject-b3f1f.appspot.com",
  messagingSenderId: "578504513040",
  appId: "1:578504513040:web:182cf94c90cfb8a70adc95",
  measurementId: "G-2B0MVE44S5"
};
firebase.initializeApp(config);

export default firebase;
