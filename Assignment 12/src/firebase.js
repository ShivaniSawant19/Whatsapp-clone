import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgsSJ2p8G3jOEO3VVqVJnvJskHZL02CjY",
    authDomain: "whatsapp-firebase-yt-27b56.firebaseapp.com",
    projectId: "whatsapp-firebase-yt-27b56",
    storageBucket: "whatsapp-firebase-yt-27b56.appspot.com",
    messagingSenderId: "864333708153",
    appId: "1:864333708153:web:f83784924d6b80c79e0da8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db