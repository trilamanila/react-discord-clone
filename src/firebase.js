import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCmZ6ZmDQICpMYT8M_LyvAQEkuxpVZg1LE",
  authDomain: "discord-clone-8eaf8.firebaseapp.com",
  projectId: "discord-clone-8eaf8",
  storageBucket: "discord-clone-8eaf8.appspot.com",
  messagingSenderId: "841594300096",
  appId: "1:841594300096:web:9c2a4b53a1234ffec1ef25",
  measurementId: "G-G4XK67N7BN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;