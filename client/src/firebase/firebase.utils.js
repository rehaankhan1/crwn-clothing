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

  export const convertCartItemSnapshotToMap = (collections) => {
    // const transformedCollection = collections.then(doc => {
    //   console.log(doc.data().items)
    //   return doc.data().items
    // })

    console.log(collections)

    const transformedCollection = collections.docs.then(doc => {
      console.log(doc.data().items)
      return doc.data().items
    })

    return transformedCollection


    // let promise = new Promise(function (resolve, reject) {
    //    collections
    //    .then(doc => {
    //     resolve(doc.data().items)
    //   }).catch(err => {
    //       reject(err)
    //   })
    // })

    // promise.then(function (response) {
    //   console.log(response)
    // }).catch(err => {
    //   console.log(err)
    // })

    // return promise.then(function (response) {
    //   console.log(response)
    //   return response
    // }).catch(err => {
    //   console.log(err)
    //   return err
    // })

  }







  


  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
          unsubscribe()
          resolve(userAuth)
      }, reject)
    })
  }


  export const showDataFromId = data => {
    console.log(` L O O K   H E R E -> ${(data.id)}`)
  }


  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  //this will ensure popup
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({  prompt: 'select_account'  });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase





// // Get current user 
// if(store.get('userId')) {
//   const userID = store.get('userId').id
//   const userRef = firestore.doc(`cartItemFb/${userID}`)
  
//   const snapShot =  userRef.get()
//   snapShot.then(function(snapShot) {
//       if(snapShot.exists){
//           console.log('varuuuuuuuuuururururu')
//           let didFind = 0

//           snapShot.data().items.map(doc => {
//               if(doc.name == cartItemToAdd.name) {
//                   try {        
                  
//                       userRef
//                       .where('name', '==', doc.name)
//                       .update(
//                           firebase.firestore.FieldValue.arrayUnion({
//                               imageUrl: cartItemToAdd.imageUrl,
//                               name: cartItemToAdd.name,
//                               price: cartItemToAdd.price,
//                               quantity: 1
//                           })
                      
                        
//                       )
                
//                   didFind = 1
//                   }catch(error) {
//                       console.log('error updating quantity ->   ', error.message)
//                   }
//               }
//           })

//           if(didFind == 0){
//            try {
//               userRef.update(
//                   {"items":
//                   firebase.firestore.FieldValue.arrayUnion({
//                       imageUrl: cartItemToAdd.imageUrl,
//                       name: cartItemToAdd.name,
//                       price: cartItemToAdd.price,
//                       quantity: 1
//                   })
//               }
                
//               )
//            }catch(error) {
//               console.log('error appending ->   ', error.message)
//            }
//           }




//       }else {
//           try {
//               userRef.set({
//                   // { sharedWith: [{ who: "third@test.com", when: new Date() }] },
//                   // items: [ { who: "third@test.com" } ]
                 
//                   items: [{
//                       imageUrl: cartItemToAdd.imageUrl,
//                       name: cartItemToAdd.name,
//                       price: cartItemToAdd.price,
//                       quantity: 1
//                   }]
                  
//               })
//           }catch(error) {
//               console.log('error adding item ->   ', error.message)
//           }
//       }
//   })

   
  
//   // if(!snapShot.child("items")) {
//   //      console.log('YOLO')
//   //     try {
//   //         userRef.set({
//   //             // { sharedWith: [{ who: "third@test.com", when: new Date() }] },
//   //             // items: [ { who: "third@test.com" } ]
             
//   //             items: [{
//   //                 imageUrl: cartItemToAdd.imageUrl,
//   //                 name: cartItemToAdd.name,
//   //                 price: cartItemToAdd.price,
//   //                 quantity: 1
//   //             }]
              
//   //         })
//   //     }catch(error) {
//   //         console.log('error adding item ->   ', error.message)
//   //     }
//   // }else{

//   //     console.log('veyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
//   // }

// }



















