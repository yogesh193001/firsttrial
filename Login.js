import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import firebase from "./firebaseConfig";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Redirect to home page after successful login
    } catch (error) {
      console.error(error.message);
    }
  };

  const signUp = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Redirect to home page after successful sign up
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogin = () => {
    logIn(email, password);
  };

  const handleSignUp = () => {
    signUp(email, password);
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

export default Login;
