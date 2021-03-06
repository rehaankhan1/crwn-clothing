import  UserActionTypes   from './user.types'


export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const SignInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const SignInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})


export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const getOrderAgain = data => ({
    // console.log(`hereeeeyyyyyyyy    y-> ${ Object.keys(data['data']['0']) }`)
    // console.log(`againyee    ----> ${data['data']}`)
    type: UserActionTypes.GET_ORDER_AGAIN2,
    payload: data
})

export const signUpStart = (userData) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userData
})

export const signUpSuccess = (user) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
})

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})
