import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAz8lSS_WSeZY7zPTzygOkn0ad7ueOAINU",
    authDomain: "crwn-c50fc.firebaseapp.com",
    databaseURL: "https://crwn-c50fc.firebaseio.com",
    projectId: "crwn-c50fc",
    storageBucket: "crwn-c50fc.appspot.com",
    messagingSenderId: "704647556787",
    appId: "1:704647556787:web:bdef5cd4ac034bb565cac6"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    //because when we will sign out it will be null  
    if(!userAuth) return; 

    console.log(`-----${additionalData}`)
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

  
    //here we make new account
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      
      const createdAt = new Date();
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
           
        }catch(error) {
            console.log('error creating user', error.message)
        }

    }

    //if user already exists, it wilL return userRef
    return userRef;

  }


  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  //this will ensure popup
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({  prompt: 'select_account'  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase