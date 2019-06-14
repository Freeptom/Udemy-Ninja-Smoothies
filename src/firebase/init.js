import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAgeZptJJyT2QOzq-vyKR_M1fXa06ijfM',
  authDomain: 'udemy-ninja-smoothies-b86ca.firebaseapp.com',
  databaseURL: 'https://udemy-ninja-smoothies-b86ca.firebaseio.com',
  projectId: 'udemy-ninja-smoothies-b86ca',
  storageBucket: 'udemy-ninja-smoothies-b86ca.appspot.com',
  messagingSenderId: '745899610206',
  appId: '1:745899610206:web:512f3511bbfde45c',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database

export default firebaseApp.firestore();
