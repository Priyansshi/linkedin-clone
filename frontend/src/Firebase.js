import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD9u3Hzdi5vbJyFPfpa34s5IPbAxv1oWRY",
  authDomain: "linkedin-clone-447c7.firebaseapp.com",
  databaseURL: "https://linkedin-clone-447c7-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-447c7",
  storageBucket: "linkedin-clone-447c7.appspot.com",
  messagingSenderId: "582774992239",
  appId: "1:582774992239:web:3af7aff6ef89b7e9450c9a",
  measurementId: "G-BEREJHR87T"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};