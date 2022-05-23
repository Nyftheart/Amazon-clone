import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBybQ6jII6UINd8ppC5U4ZtMrh0o6v_bC0",
    authDomain: "clone-6a615.firebaseapp.com",
    projectId: "clone-6a615",
    storageBucket: "clone-6a615.appspot.com",
    messagingSenderId: "605436361304",
    appId: "1:605436361304:web:0d1bf8c157ae831471682d"
};

const app = (!firebase.apps.length ?
    firebase.initializeApp(firebaseConfig)
    :firebase.app());

const db = app.firestore();

export default db;