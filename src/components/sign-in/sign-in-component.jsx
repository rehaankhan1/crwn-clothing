import React from 'react'
import './sign-in-component.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {  signInWithGoogle  } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const  {  value,name  } = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='Email' type='email' value={this.state.email} handleChange={this.handleChange} required />
                   
                    <FormInput name='password' label='Password' type='password' value={this.state.password} handleChange={this.handleChange} required />
                   
                    <div className='buttons'>
                    <CustomButton type='submit'> Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SignIn