import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDZMLUhoIx6-puUc7W_KShg9FEeYfeEdQ8",
  authDomain: "react-chat-web-app-a4b74.firebaseapp.com",
  projectId: "react-chat-web-app-a4b74",
  storageBucket: "react-chat-web-app-a4b74.appspot.com",
  messagingSenderId: "468415121118",
  appId: "1:468415121118:web:cfb17811d12fc72641644f",
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
