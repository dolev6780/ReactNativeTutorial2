import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import image from "../assets/images.png";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("no username");
  const [errors, setErrors] = useState({});
  const checkValidation = () => {
    let errors = {};

    if (!username) {
      errors.username = "Must have username";
    }
    if (!password) {
      errors.password = "Must have password";
    }
    if (data === "no username") {
      errors.hasUsername = "username dosent exist";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const signin = () => {
    if (checkValidation()) {
      console.log("signed in");
      setUsername("");
      setPassword("");
      setErrors({});
    } else {
      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.form}>
        <Text style={styles.title}>Sign In</Text>
        <Image source={image} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="username"
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.error}>{errors.username}</Text>
        ) : null}
        {errors.hasUsername ? (
          <Text style={styles.error}>{errors.hasUsername}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          onChangeText={setPassword}
        />
        {errors.password ? (
          <Text style={styles.error}>{errors.password}</Text>
        ) : null}
        <Pressable style={styles.button} onPress={signin}>
          <Text>Sign in</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    //for ios
    elevation: 10, //for android
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    padding: 10,
    fontWeight: "500",
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
    height: 40,
    marginBottom: 10,
  },
  error: {
    color: "red",
    padding: 4,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignContent: "center",
    alignItems: "center",
  },
});

// const [isDarkMode, setIsDarkMode] = useState(false);
// console.log(isDarkMode);
{
  /* <TextInput
        style={styles.input}
        placeholder="phone number"
        keyboardType="number-pad"
      /> */
}
{
  /* <TextInput style={styles.textbox} placeholder="textbox" multiline /> */
}
{
  /* <Text>dark mode</Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => {
          setIsDarkMode(!isDarkMode);
        }}
        thumbColor={"lightblue"}
        trackColor={{ false: "blue", true: "lightgreen" }}
      /> */
}
