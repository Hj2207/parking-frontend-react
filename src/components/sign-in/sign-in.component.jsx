import React, {useState} from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button'
import './sign-in.styles.scss'
import FormDropdown from '../form-dropdown/form-dropdown.component'

import {emailSignInStartAsync} from '../../redux/user/user.action'

const SignIn =({emailSignInStartAsync})=> {
    
    const [userCredentials,setCredentials]=useState({email:'',password:'',type:'Booking Counter Agent'})
    const {email,password,type}=userCredentials;
    const userType=['Booking Counter Agent','Parking Zone Assistant']

    const handleSubmit = async event => {
            event.preventDefault();
            emailSignInStartAsync(email,password,type);
        }

    // reusable function to handle form data
    const handleChange = event => {
            const { name, value } = event.target;
            setCredentials({ ...userCredentials,[name]: value });
        }
   
        return (
            <div className='sign-in'>
                <h2>Welcome to Parking management system</h2>
                <span>Sign in with your credentials</span>

                <form onSubmit={handleSubmit}>
                    <FormDropdown
                        name='type'
                        handleChange={handleChange}
                        value={type}
                        label='userType'
                        options={userType}
                        required />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={email}
                        label='email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={handleChange}
                        value={password}
                        label='password'
                        required />
                    
                    <div className='buttons'>
                        <CustomButton onClick={handleSubmit} type='submit'>
                            Sign In
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }



const mapDispatchToProps= dispatch=>({
    emailSignInStartAsync:(email,password,type)=>dispatch(emailSignInStartAsync({email,password,type}))
})

export default connect(null, mapDispatchToProps)(SignIn);