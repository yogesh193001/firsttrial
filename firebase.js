import firebase from "firebase/app";
import "firebase/firestore";
import { app, analytics } from "./firebaseConfig";
const addTodo = async (userId, todo) => {
  try {
    await firebase
      .firestore()
      .collection("Users")
      .doc(userId)
      .collection("Todos")
      .add(todo);
  } catch (e) {
    console.error(e.message);
  }
};

const getTodos = async (userId) => {
  try {
    const todos = await firebase
      .firestore()
      .collection("Users")
      .doc(userId)
      .collection("Todos")
      .get();

    return todos.docs.map((doc) => doc.data());
  } catch (e) {
    console.error(e.message);
  }
};

export { addTodo, getTodos };
