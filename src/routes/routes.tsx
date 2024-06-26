import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Login from "../screens/login/index";
import Home from "../screens/Home/index";
import ToastMessage from "../components/ToastMessage";

export type RoutesProps = {
  Login: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RoutesProps>();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      <ToastMessage />
    </NavigationContainer>
  );
};

export default MyStack;
