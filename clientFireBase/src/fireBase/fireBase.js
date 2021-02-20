import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAky1EqHBmkMA16mVA6-_Awrkkw75cvyQ",
    authDomain: "leader-efec9.firebaseapp.com",
    projectId: "leader-efec9",
    storageBucket: "leader-efec9.appspot.com",
    messagingSenderId: "147820168758",
    appId: "1:147820168758:web:e50b60ca06df5b49997a97",
    measurementId: "G-TKTZZB9FXM"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const currentUser = '';
const provider = new firebase.auth.GoogleAuthProvider();

//Google
export const signInWithGoogle = () => {
  debugger;
  if (!firebase.apps.length) {
    firebase.initializeApp({});
 }else {
    firebase.app(); // if already initialized, use that one
 }
 
  auth.signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log('success');
    console.log(result);
    console.log(user.uid);
    console.log(user);
    currentUser = user;

    

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log('error');
    console.log(error);
  })
};

