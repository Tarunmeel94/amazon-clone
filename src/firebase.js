// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"; 
const firebaseConfig = {
    apiKey: "AIzaSyBnGQKCsvn6SCodCGCAl0UwVZSb5zJ0lHA",
    authDomain: "amezon-clone-fbbd4.firebaseapp.com",
    projectId: "amezon-clone-fbbd4",
    storageBucket: "amezon-clone-fbbd4.appspot.com",
    messagingSenderId: "801781318291",
    appId: "1:801781318291:web:7b08ba77f68db8a7b18366",
    measurementId: "G-9LD3WT35CH"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};