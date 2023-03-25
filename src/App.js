/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Models from "./pages/Models";
import Form from "./pages/Forms/FormTemplate";
import "./App.css";
import Profile from "./pages/Profile";
import { signInWithPopup, signOut } from "firebase/auth";
import { googleprovider, auth, db } from "./firebaseconfig";

import { doc, getDoc,getDocs , addDoc,collection, query, where  } from "firebase/firestore";
import { Button } from "antd";


export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleprovider)
    alert("Logged in")

  } catch (err) {
    alert("Failed try again!")
  }
}
export const database = async () => {
  // await addDoc(collection(db, "Contacts"), {
  //   "userId": auth.currentUser.uid,
  //   name: "Mama Angeles",
  //   relation: "Mother",
  //   phonenumber: "01060120066"
    
  // });
  const docRef = collection(db, "Contacts");

  const q = query(docRef, where("userId", "==", auth.currentUser.uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data().name);
  });
  // const docSnap = await getDoc(docRef);
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
}

export const signOutWithGoogle = async () => {
  try {
    await signOut(auth)
    alert("Logged out !")
  } catch (err) {
    console.log(err)
  }
}







function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile/:profileId" element={<Profile />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/models" element={<Models />} />
        <Route path="/form/:disease" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
