import firebase from 'firebase';


//CREATE USER
const signNewUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error.message));
}



//LOG USER
const logUser = (email, password) =>{
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => console.log(error.message));
}



//AUTH OBSERVER IF USER CHANGE
const authChange = () => {
    return firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // User is signed in.
            return user;
        } else {
            // User is signed out.
            // ...
        }
    });

}

//AUTH CHECK USER
const checkUser = () => {
    const user = firebase.auth().currentUser;
    if (user) {
        // User is signed in.
        return user;
    } else {
        // No user is signed in.

    }
}
