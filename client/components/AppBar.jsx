import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function AppBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.appbar}>
      <Text style={styles.logo}>AppBar</Text>
      <View style={styles.menu}>
        <Icon
          style={styles.menuIcon}
          name="menu"
          color="white"
          size={28}
          onPress={() => navigation.toggleDrawer()} // Toggle drawer on press
          accessibilityLabel="Toggle menu"
        />
      </View>
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
  menuIcon: {
    marginRight: 10,
  },
});
