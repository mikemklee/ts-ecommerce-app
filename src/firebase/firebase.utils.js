import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA6shhCN6kfuwlJuNyyUGC-oZp-5JtJ8n4',
  authDomain: 'ecomm-leemun1.firebaseapp.com',
  databaseURL: 'https://ecomm-leemun1.firebaseio.com',
  projectId: 'ecomm-leemun1',
  storageBucket: 'ecomm-leemun1.appspot.com',
  messagingSenderId: '883626971730',
  appId: '1:883626971730:web:054bbb90b47124d5e5458b',
  measurementId: 'G-0WEGREXK89',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
