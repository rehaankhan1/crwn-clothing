import store from 'store'
import firebase,{firestore} from '../../firebase/firebase.utils'

 export const addItemToCart =  (cartItems, cartItemToAdd) => {

    // Loop over all stored values 
// store.each(function(value, key) {
//     console.log(key, '==', value)
// })



    //find function will iterate
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )


    if(existingCartItem) {

        const toRet = cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
              ? {...cartItem, quantity: cartItem.quantity + 1}
              : cartItem
            )

        if(store.get('userId')) {
            const userID = store.get('userId').id
            const userRef = firestore.doc(`cartItemFb/${userID}`)
            const snapShot =  userRef.get()

            snapShot.then(function(snapShot) { 
                if(snapShot.exists){ 
                    try {
                        userRef.update({
                            // { sharedWith: [{ who: "third@test.com", when: new Date() }] },
                            // items: [ { who: "third@test.com" } ]
                           
                            items: [
                                ...toRet
                            ]
                            
                        })
                    }catch(error) {
                        console.log('error adding item ->   ', error.message)
                    }
                }
            })

        }



        //The map() method creates a new array with the results of calling a function for every array element.
        return toRet
    }



    if(store.get('userId')) {
        const userID = store.get('userId').id
        const userRef = firestore.doc(`cartItemFb/${userID}`)
        const snapShot =  userRef.get()

        snapShot.then(function(snapShot) { 
            if(snapShot.exists){ 
                try {
                    userRef.update({
                        // { sharedWith: [{ who: "third@test.com", when: new Date() }] },
                        // items: [ { who: "third@test.com" } ]
                       
                        items: [...cartItems, {...cartItemToAdd, quantity:1}]
                        
                    })
                }catch(error) {
                    console.log('error updating item ->   ', error.message)
                }
            }else{
                try {
                    userRef.set({
                        // { sharedWith: [{ who: "third@test.com", when: new Date() }] },
                        // items: [ { who: "third@test.com" } ]
                       
                        items: [...cartItems, {...cartItemToAdd, quantity:1}]
                        
                    })
                }catch(error) {
                    console.log('error adding item ->   ', error.message)
                } 
            }
        })

    }


    //this will run by default when item is added first time
    return [...cartItems, {...cartItemToAdd, quantity:1}]

}






export const removeItemFromCart = (cartItems, cartItemToRemove) => {

        const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemToRemove.id
        )

        if(existingCartItem.quantity === 1) {

            const toRet = cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)


            if(store.get('userId')) {
                const userID = store.get('userId').id
                const userRef = firestore.doc(`cartItemFb/${userID}`)
                const snapShot =  userRef.get()
    
                snapShot.then(function(snapShot) { 
                    if(snapShot.exists){ 
                        try {
                            userRef.update({
                                // { sharedWith: [{ who: "third@test.com", when: new Date() }] },
                                // items: [ { who: "third@test.com" } ]
                               
                                items: [
                                    ...toRet
                                ]
                                
                            })
                        }catch(error) {
                            console.log('error adding item ->   ', error.message)
                        }
                    }
                })
    
            }




            return toRet
        }

        const defRet = cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
            )




        if(store.get('userId')) {
            const userID = store.get('userId').id
            const userRef = firestore.doc(`cartItemFb/${userID}`)
            const snapShot =  userRef.get()

            snapShot.then(function(snapShot) { 
                if(snapShot.exists){ 
                    try {
                        userRef.update({
                            // { sharedWith: [{ who: "third@test.com", when: new Date() }] },
                            // items: [ { who: "third@test.com" } ]
                           
                            items: [
                                ...defRet
                            ]
                            
                        })
                    }catch(error) {
                        console.log('error adding item ->   ', error.message)
                    }
                }
            })

        }



        return defRet

}

export const removeItemCompletely = (cartItems, cartItemToRemove) => {
    const toRet = cartItems.filter(
        cartItem => cartItem.id !== cartItemToRemove.id
    )

    if(store.get('userId')) {
        const userID = store.get('userId').id
        const userRef = firestore.doc(`cartItemFb/${userID}`)
        const snapShot =  userRef.get()

        snapShot.then(function(snapShot) { 
            if(snapShot.exists){ 
                try {
                    userRef.update({
                        // { sharedWith: [{ who: "third@test.com", when: new Date() }] },
                        // items: [ { who: "third@test.com" } ]
                       
                        items: [
                            ...toRet
                        ]
                        
                    })
                }catch(error) {
                    console.log('error adding item ->   ', error.message)
                }
            }
        })

    }



    return toRet
}