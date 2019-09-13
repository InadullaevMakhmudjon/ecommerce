import React from 'react';
import FormInput from '../../components/forms/form-input';
import CustomButton from '../../components/forms/custom-button';
import { signInWithGoogle } from '../../firebase/app';

export default ({ handleChange, signIn_email, signIn_password, signIn }) => (
    <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={signIn}>
            <FormInput
                name="signIn_email"
                type="text"
                label="Email"
                handleChange={handleChange}
                value={signIn_email} />

            <FormInput
                name="signIn_password"
                type="password"
                label="Password"
                handleChange={handleChange}
                value={signIn_password} />
            <div className='customButtons'>
                <CustomButton
                    type="submit">
                    Sign in
            </CustomButton>

                <CustomButton
                    className='custom-button signInWithGoogle'
                    onClick={signInWithGoogle}>
                    Sign in with Google
            </CustomButton>
            </div>
        </form>
    </div>
)