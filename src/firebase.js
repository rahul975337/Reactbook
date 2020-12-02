import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCTMKQEmwz_NqQ-wkG-B3N7g6P7iDE1Qts",
  authDomain: "reactbook-be109.firebaseapp.com",
  databaseURL: "https://reactbook-be109.firebaseio.com",
  projectId: "reactbook-be109",
  storageBucket: "reactbook-be109.appspot.com",
  messagingSenderId: "334853803046",
  appId: "1:334853803046:web:a72a311a8bd1c059f3eae7",
  measurementId: "G-LEQWPR818W",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
