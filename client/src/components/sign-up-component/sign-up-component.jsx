import React, {useState} from 'react'
import {connect} from 'react-redux'
import swal from '@sweetalert/with-react';
import './sign-up-component.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
//import {  auth, createUserProfileDocument  } from '../../firebase/firebase.utils'

import {signUpStart} from '../../redux/user/user.actions'

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        phoneNum: '',
        postal: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName,  email,  password,  confirmPassword,  phoneNum,  address, postal } = userCredentials

  const  handleSubmit = async event => {

    swal({
        title: "Loading!",
        text: "Please Wait!",
        icon: "info",
        buttons: false,
        timer: 5000,
      });

        event.preventDefault();

        
      
        if(password !== confirmPassword){
                // alert("Password don't match!")
                swal({
                    title: "Error!",
                    text: "Password don't match!",
                    icon: "error",
                    buttons: false,
                    timer: 5000,
                  });
                return;
        }

        signUpStart(displayName,  email,  password, confirmPassword, phoneNum,  address, postal)

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
                        type='number'
                        name='phoneNum'
                        value={phoneNum}
                        onChange={handleChange}
                        label='Phone Number'
                        required
                    />

                    <FormInput 
                        type='text'
                        name='address'
                        value={address}
                        onChange={handleChange}
                        label='Address'
                        required
                    />


                    <FormInput 
                        type='text'
                        name='postal'
                        value={postal}
                        onChange={handleChange}
                        label='Postal Code'
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
    signUpStart: (displayName,  email,  password,  confirmPassword, phoneNum,  address, postal) => dispatch(signUpStart({displayName,  email,  password,  confirmPassword, phoneNum,  address, postal}))
})

export default connect(null, mapDispatchToProps)(SignUp)
