import React from 'react';
import FormInput from '../forms/form-input';
import CustomButton from '../forms/custom-button';

export default ({ handleChange, ...others }) => (
    <div className='sign-up'>
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={others.signUp}>
            <FormInput
                name='signUp_displayName'
                type='text'
                label='Display name'
                handleChange={handleChange}
                value={others.signUp_displayName}
                required
            />
            <FormInput
                name='signUp_email'
                type='email'
                label='Email'
                handleChange={handleChange}
                value={others.signUp_email}
                required
            />
            <FormInput
                name='signUp_password'
                type='password'
                label='Password'
                handleChange={handleChange}
                value={others.signUp_password}
                required
            />
            <FormInput
                name='signUp_confirmPassword'
                type='password'
                label='Confirm password'
                handleChange={handleChange}
                value={others.signUp_confirmPassword}
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
    </div>
)