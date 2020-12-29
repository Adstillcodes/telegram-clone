import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDcN04Bi-7fiQKELmRSGZ8Mk4bGLj40llo",
  authDomain: "telegram-clone-5d7af.firebaseapp.com",
  databaseURL: "https://telegram-clone-5d7af-default-rtdb.firebaseio.com",
  projectId: "telegram-clone-5d7af",
  storageBucket: "telegram-clone-5d7af.appspot.com",
  messagingSenderId: "1085217017076",
  appId: "1:1085217017076:web:c193025a9b03b38d1862a1",
  measurementId: "G-MPTHM2P42Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;  