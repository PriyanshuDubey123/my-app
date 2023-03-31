import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';  

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCAl3DwhyVLMk_cZ8fBeIzat7PAlZ4_eEk",
    authDomain: "kisan-app-f8a1d.firebaseapp.com",
    projectId: "kisan-app-f8a1d",
    storageBucket: "kisan-app-f8a1d.appspot.com",
    messagingSenderId: "845206720075",
    appId: "1:845206720075:web:7b3af346a01f771590c7ce"
  });

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseConfig.firestore();
const storage = firebase.storage();

  export {auth,provider,db,storage};
