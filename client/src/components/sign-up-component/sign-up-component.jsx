import React, {useState} from 'react'
import {connect} from 'react-redux'

import './sign-up-component.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
//import {  auth, createUserProfileDocument  } from '../../firebase/firebase.utils'

import {signUpStart} from '../../redux/user/user.actions'

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName,  email,  password,  confirmPassword   } = userCredentials

  const  handleSubmit = async event => {
        event.preventDefault();
      
        if(password !== confirmPassword){
                alert("Password don't match!")
                return;
        }

        signUpStart(displayName,  email,  password)

    }


  const  handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({  ...userCredentials,  [name]: value})
    }

    
        // const { displayName,  email,  password,  confirmPassword   } = this.state;
        return (
            <div className='signup'>
                <h2 className='title'>I do not have a account.</h2>
                <span>Sign Up with your email and password</span>

                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='confirmPassword'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    


}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName,  email,  password,  confirmPassword) => dispatch(signUpStart({displayName,  email,  password,  confirmPassword}))
})

export default connect(null, mapDispatchToProps)(SignUp)
