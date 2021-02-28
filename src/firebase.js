import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD3FATQqVTwvK_CJRcVClyQNj9IaDDD3Bg",
    authDomain: "twitter-clone-ba219.firebaseapp.com",
    projectId: "twitter-clone-ba219",
    storageBucket: "twitter-clone-ba219.appspot.com",
    messagingSenderId: "137315744821",
    appId: "1:137315744821:web:6ae7289bbe67e6176d857c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;