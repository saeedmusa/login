import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMc9TIQ7q9ohrIlRdX4kZRQ0ph8P_lxjY",
  authDomain: "webapp-effce.firebaseapp.com",
  projectId: "webapp-effce",
  storageBucket: "webapp-effce.appspot.com",
  messagingSenderId: "658374745443",
  appId: "1:658374745443:web:6f36968bd143c62e57c756",
  measurementId: "G-26CQZW39QW",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth;
