

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBHQ-7DbLkvfAl7EAFoRwqBWa_nQ65zvLU",
  authDomain: "parent-portal-dc53c.firebaseapp.com",
  projectId: "parent-portal-dc53c",
  storageBucket: "parent-portal-dc53c.appspot.com",
  messagingSenderId: "630128826117",
  appId: "1:630128826117:web:d8d82b0d9d777aa588496c",
  measurementId: "G-TJNKXGGESV"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }