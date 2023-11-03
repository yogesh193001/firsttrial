import React, { useState } from "react";
import firebase from "./firebaseConfig";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Redirect to home page after successful sign up
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password);
  };

  // Rest of the component code...
}

export default Signup;
