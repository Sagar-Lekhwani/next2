import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBinkdOAqgJP96HK7yowcFNZRc7qzHaW0A",
  authDomain: "fir-auth-3c641.firebaseapp.com",
  projectId: "fir-auth-3c641",
  storageBucket: "fir-auth-3c641.appspot.com",
  messagingSenderId: "583552001638",
  appId: "1:583552001638:web:1a78b4959c1ae441a82fa7"

};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export {app, auth};