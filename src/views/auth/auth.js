import React from 'react';
import { auth, storeUserToFirestore } from '../../firebase/app';
import SignIn from '../../components/auth/sign-in';
import SignUp from '../../components/auth/sign-up';

export default class extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
                signIn_email: '',
                signIn_password: '',
                signUp_displayName: '',
                signUp_email: '',
                signUp_password: '',
                signUp_confirmPassword: '',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    signUp = async event => {
        event.preventDefault();
        const { signUp_displayName, signUp_email, signUp_password, signUp_confirmPassword} = this.state;
        if(signUp_password !== signUp_confirmPassword) {
            alert("Password doesn't match");
            return;
        }

        try{
             const { user } = await auth.createUserWithEmailAndPassword(signUp_email, signUp_password);
             storeUserToFirestore(user, { displayName: signUp_displayName })
        }catch(err) {
            console.error(err);
        }
    }

    signIn =  async event => {
        event.preventDefault();
        const { signIn_email, signIn_password } = this.state;
        await auth.signInWithEmailAndPassword(signIn_email, signIn_password);
    }

    render() {
        return (
            <div className="auth">
                <SignIn
                    handleChange={this.handleChange}
                    signIn={this.signIn}
                    {...this.state}
                />
                <SignUp
                    handleChange={this.handleChange}
                    signUp={this.signUp}
                    {...this.state} 
                />
            </div>
        )
    }
}