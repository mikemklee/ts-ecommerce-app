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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  try {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach((object) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, object);
    });

    return await batch.commit();
  } catch (err) {
    console.warn(err);
  }
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
