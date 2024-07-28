import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import AppBar from "./components/AppBar";
import Feed from "./screens/Feed";
import SignIn from "./screens/SignIn";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <AppBar />
      <Feed />
      {/* <SignIn /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
});
