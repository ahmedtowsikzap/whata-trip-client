import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeauthentication from "../Firebase/firebase.init";


initilizeauthentication();

const useFirebase = () => {

    const [user, setuser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {

                const user = result.user;
                console.log(user)
            })

    }
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, user => {

            if (user) {
                setuser(user);
            }
        })
        return unsubscribe;
    }, [])
    const logOut = () => {

        signOut(auth)
            .then(() => {
                setuser({});
            })

    }
    return {
        user,
        signInWithGoogle,
        logOut


    }
}
export default useFirebase;