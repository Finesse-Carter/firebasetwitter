import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDzFqVl-9LLOaJSooIj_lJULmXwKyrFnm8",
  authDomain: "fir-twitter-c366d.firebaseapp.com",
  projectId: "fir-twitter-c366d",
  storageBucket: "fir-twitter-c366d.appspot.com",
  messagingSenderId: "545011534337",
  appId: "1:545011534337:web:4d91a1ff5550e9ba6f0e00",
  measurementId: "G-H6WE824ZR4"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
