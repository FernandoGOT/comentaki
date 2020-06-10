import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCSd8HQuvfVEDFa3Q45kcmXhb03lYqKiuw",
  authDomain: "devpleno-comentaki-app.firebaseapp.com",
  databaseURL: "https://devpleno-comentaki-app.firebaseio.com",
  projectId: "devpleno-comentaki-app",
  storageBucket: "devpleno-comentaki-app.appspot.com",
  messagingSenderId: "800337063990",
  appId: "1:800337063990:web:f562c08786b85fbd846897"
}

firebase.initializeApp(firebaseConfig)

export default firebase