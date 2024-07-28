import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "../screens/Feed";
import SignIn from "../screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import AppBar from "./AppBar";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          header: () => <AppBar />,
          drawerPosition: "left",
        }}
      >
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Sign In" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
