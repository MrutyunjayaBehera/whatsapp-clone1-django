
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLQe4a5KOqat4q7tpKB7W7IXz53jcPJmA",
  authDomain: "whatsapp-clone-8e450.firebaseapp.com",
  projectId: "whatsapp-clone-8e450",
  storageBucket: "whatsapp-clone-8e450.appspot.com",
  messagingSenderId: "1054828452487",
  appId: "1:1054828452487:web:9bb7941edc614b77707622",
  measurementId: "G-E5TK75ME93"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;