import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { app, analytics } from "./firebaseConfig";
const Home = () => {
  const [task, setTask] = useState("");
  const [morningTasks, setMorningTasks] = useState([]);
  const [afternoonTasks, setAfternoonTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (time) => {
    if (task.trim() === "") {
      // Don't add the task if it's empty
      return;
    }

    if (time === "morning") {
      setMorningTasks([...morningTasks, task]);
    } else {
      setAfternoonTasks([...afternoonTasks, task]);
    }
    setTask("");
  };

  const completeTask = (index, time) => {
    if (time === "morning") {
      setCompletedTasks([...completedTasks, morningTasks[index]]);
      setMorningTasks(morningTasks.filter((task, i) => i !== index));
    } else {
      setCompletedTasks([...completedTasks, afternoonTasks[index]]);
      setAfternoonTasks(afternoonTasks.filter((task, i) => i !== index));
    }
  };

  // Function to clear all tasks
  const clearAll = () => {
    setMorningTasks([]);
    setAfternoonTasks([]);
    setCompletedTasks([]);
  };

  // Get current date
  const date = new Date();
  const day = date.toLocaleString("default", { weekday: "long" });
  const fullDate = date.toLocaleDateString("default", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Rest of the component code...

  // Rest of the file...
  return (
    <View style={styles.container}>
      <Text style={styles.firsttitle}>My Daily Tasks</Text>
      <Text style={styles.date}>
        {day}, {fullDate}
      </Text>
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Enter task"
        style={styles.input}
      />
      <View style={styles.Buttons}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => addTask("morning")}
        >
          <Text>Add to Morning Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => addTask("afternoon")}
        >
          <Text>Add to Afternoon Tasks</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.Buttonclear} onPress={clearAll}>
        <Text>Clear All Tasks</Text>
      </TouchableOpacity>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.tasks}>
          <Text style={styles.titles}>Morning Tasks:</Text>
          {morningTasks.map((task, index) => (
            <View key={index} style={styles.taskContainer}>
              <TouchableOpacity onPress={() => completeTask(index, "morning")}>
                <Text>
                  {index + 1}. {task}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.tasks}>
          <Text style={styles.titles}>Afternoon Tasks:</Text>
          {afternoonTasks.map((task, index) => (
            <View key={index} style={styles.taskContainer}>
              <TouchableOpacity
                onPress={() => completeTask(index, "afternoon")}
              >
                <Text>
                  {index + 1}. {task}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.tasks}>
          <Text style={styles.titles}>Completed Tasks:</Text>
          {completedTasks.map((task, index) => (
            <View key={index} style={styles.taskContainer}>
              <Text style={styles.tasklistcompleted}>
                {index + 1}. {task}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  firsttitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
    backgroundColor: "#3bb1a9",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  input: {
    height: 55,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  Button: {
    alignItems: "center",
    backgroundColor: "#b1eeea",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  Buttonclear: {
    alignItems: "center",
    backgroundColor: "#f5cfcf",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  ScrollView: {
    marginBottom: 20,
  },
  tasks: {
    marginBottom: 20,
  },
  titles: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  taskContainer: {
    backgroundColor: "#e2e1dc",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default Home;
