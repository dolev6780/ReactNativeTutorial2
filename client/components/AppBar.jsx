import { View, Text, StyleSheet, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import React, { useState } from "react";

export default function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.appbar}>
      <Text style={styles.logo}>AppBar</Text>
      <View style={styles.menu}>
        <Icon
          style={styles.menuIcon}
          name="menu"
          color="white"
          size={28}
          onPress={() => {
            setIsOpen(!isOpen);
          }}
        />
      </View>
      {isOpen && (
        <View style={styles.menuContainer}>
          <Pressable>
            <Text style={styles.menuButton}>1</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.menuButton}>2</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.menuButton}>3</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.menuButton}>4</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "black",
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  logo: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 20,
  },
  menuContainer: {
    position: "absolute",
    right: 0,
    top: 60,
    backgroundColor: "black",
    width: "40%",
    alignItems: "flex-end",
    padding: 10,
  },
  menuButton: {
    color: "white",
  },
});
