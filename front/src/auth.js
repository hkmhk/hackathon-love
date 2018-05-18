import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAin1glEzlV3jwU7L9m-T2LSlRL3Zbv6-k",
    authDomain: "starlove-18dc5.firebaseapp.com",
    databaseURL: "https://starlove-18dc5.firebaseio.com",
    projectId: "starlove-18dc5",
    storageBucket: "starlove-18dc5.appspot.com",
    messagingSenderId: "477183865355"
};

export default firebase.initializeApp(config);