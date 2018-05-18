import Firebase from '../../auth';


//CREATE USER
export const signNewUser = (email, password) => {
    return Firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error.message));
}



//LOG USER
export const logUser = (email, password) =>{
    return Firebase.auth().signInWithEmailAndPassword(email, password).catch(error => console.log(error.message));
}



//AUTH OBSERVER IF USER CHANGE
export const authChange = () => {
    return Firebase.auth().onAuthStateChanged(user => {
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
export const checkUser = () => {
    
    const user = Firebase.auth().currentUser;
    if (user) {
        // User is signed in.
        return user;
    } else {
        // No user is signed in.


    }
}
