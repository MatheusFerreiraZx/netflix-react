import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDSqnn5VsC4xNt5v5Ch5Nhu0L-e-fvKV90",
  authDomain: "netflix-clone2-b9782.firebaseapp.com",
  databaseURL: "https://netflix-clone2-b9782-default-rtdb.firebaseio.com",
  projectId: "netflix-clone2-b9782",
  storageBucket: "netflix-clone2-b9782.appspot.com",
  messagingSenderId: "997222855576",
  appId: "1:997222855576:web:2efb50f1c808106efff1ed"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
