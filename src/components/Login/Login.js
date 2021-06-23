import React, { useContext, useState } from 'react';
import './Login.css';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import googleIcon from '../../images/google-icon.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    const [user, setUser] = useState({
        isSignedIn: false,
        userName: '',
        // userType: '',
        email: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const signedInnUser = {
                    userName: result.user.displayName,
                    // userType: 'Customer',
                    email: result.user.email,
                    isSignedIn: true
                }
                setUser(signedInnUser);
                console.log(signedInnUser);
                setLoggedInUser(signedInnUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <Navbar />
            <section className='login-section'>
                {
                    user.isSignedIn === false ?
                        <button onClick={handleGoogleSignIn}><img src={googleIcon} alt="" /> Continue with Google</button>
                        :
                        <div>
                            <h4>Welcome {user.userName}</h4>
                            <p>Experience Delicious and Healthy Food</p>
                        </div>
                }
            </section>
            <Footer />
        </div>
    );
};

export default Login;