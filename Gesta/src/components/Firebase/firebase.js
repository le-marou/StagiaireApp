import app from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCL45ILdRIXm00dhfbFYQ6E1lVTOd_6Cog",
    authDomain: "gestion-des-stagiaires-7532a.firebaseapp.com",
    projectId: "gestion-des-stagiaires-7532a",
    storageBucket: "gestion-des-stagiaires-7532a.appspot.com",
    messagingSenderId: "15569423969",
    appId: "1:15569423969:web:ff3617015b976c61a5a420",
    measurementId: "G-LSBYPSSV8G"
};

class Firebase{
    constructor(){
        app.initializeApp();
        this.auth = app.auth();
    }

    //connection
    loginUser = (email,password) =>
    this.auth.signInWithEmailAndPassword(email,password);

    //deconnection
    signoutUser = ()=> this.auth.signOut();
}
export default Firebase;