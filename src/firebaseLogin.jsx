import { signInWithPopup, signOut } from "firebase/auth";
import { googleprovider, auth } from "./firebaseconfig";

export const signInWithGoogle = async () => {

    try {
        await signInWithPopup(auth, googleprovider)
        alert("Logged in")

    } catch (err) {
        alert("Failed try again!")
    }
}



export const signOutWithGoogle = async () => {
    try {
        await signOut(auth)
        alert("Logged out !")
    } catch (err) {
        console.log(err)
    }
}
