import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyD34Pzar4QFeZX-CbL2hysPPU6WWccBme4",
    authDomain: "ecommerce-86085.firebaseapp.com",
    databaseURL: "https://ecommerce-86085.firebaseio.com",
    projectId: "ecommerce-86085",
    storageBucket: "",
    messagingSenderId: "71960499049",
    appId: "1:71960499049:web:3b245f842972d0ac"
  };

  firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export async function storeUserToFirestore(user, otherProps) {
    if(!user) return
    
    const userRef = firestore.doc(`users/${user.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      try {
        await userRef.set({
          displayName: user.displayName,
          email: user.email,
          createdAt: new Date(),
          ...otherProps,
        });
      } catch(err) {
        console.log('Error', err);
      }
    }
    return userRef;
  }

  export default firebase;