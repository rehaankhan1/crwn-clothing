import React, {useState} from 'react'
import {connect} from 'react-redux'
import swal from '@sweetalert/with-react';
import './sign-in-component.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'

const SignIn = ({emailSignInStart, googleSignInStart}) => {
   const [userCredential,  setCredentials] = useState({email:'', password:''})

   const { email, password } = userCredential
   const  handleSubmit = async (event) => {
        event.preventDefault()
        
        swal({
            title: "Loading!",
            text: "Please Wait!",
            icon: "info",
            buttons: false,
            timer: 5000,
          });
          


        //const {emailSignInStart} = this.props
        emailSignInStart(email, password)
       
    }

   const  handleChange = (event) => {
        const  {  value,name  } = event.target

        //we will update the existing value to new one rather than setting new
        setCredentials({...userCredential, [name]: value})
    }

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your Email and Password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name='email' label='Email' type='email' 
                    value={email} handleChange={handleChange} required />
                   
                    <FormInput name='password' label='Password' type='password' 
                    value={password} handleChange={handleChange} required />
                   
                    <div className='buttons'>
                    <CustomButton type='submit'> Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> 
                    Sign in with Google </CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>  dispatch(emailSignInStart({email, password}))
})


export default connect(null, mapDispatchToProps)(SignIn)