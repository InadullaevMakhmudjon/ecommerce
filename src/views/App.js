import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { auth, storeUserToFirestore } from '../firebase/app';
import Home from './home/Home';
import Shoppage from './shop/ShopPage';
import Header from '../components/header/header';
import Auth from './auth/auth';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../redux/user/user.action';

class App extends Component {
    unSubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await storeUserToFirestore(user);
                userRef.onSnapshot(snapshot => {
                    // Actually if this would be in the state own, would work as asycrouns
                    setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data(),
                    });
                    this.props.history.push('/');
                });
            }
            setCurrentUser(user);
        });
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/shop' component={Shoppage}/>
                    <Route path="/auth" render={() => this.props.currentUser ? <Redirect to='/'/> : <Auth/> }/>
                </Switch>
            </div>
        )
    }
}

const mapToDispatches = dispatch => ({
    setCurrentUser: user => dispatch(setUser(user)),
});

const mapToStates = ({ user }) => ({
    currentUser: user.currentUser,
})

export default connect(mapToStates, mapToDispatches)(withRouter(App));