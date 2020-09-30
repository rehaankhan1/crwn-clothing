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

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })

    return await batch.commit()

  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    //this function will make title as keys to collection objects
      return transformedCollection.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection
          return accumulator
      }, {})
    
  }


  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
          unsubscribe()
          resolve(userAuth)
      }, reject)
    })
  }



  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  //this will ensure popup
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({  prompt: 'select_account'  });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase