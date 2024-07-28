// App.js
import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Drawer from "./components/Drawer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Drawer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
