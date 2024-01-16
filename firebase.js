import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyANUFzl6qcWjorcRqIU66ZTmMzQFALchxc",
    authDomain: "appchat-ec616.firebaseapp.com",
    projectId: "appchat-ec616",
    storageBucket: "appchat-ec616.appspot.com",
    messagingSenderId: "472647552238",
    appId: "1:472647552238:web:6504dc74a105728391b7ff"
  };

let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
export {db, auth}
