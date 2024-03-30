import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CryptoTrackerApp from "./CryptoTrackerApp";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} barStyle="auto" />
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={CryptoTrackerApp} />
          {/* Add more screens here if needed */}
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;
