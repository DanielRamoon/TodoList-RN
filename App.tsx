import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Loading from "./src/components/loading";
import MyStack from "./src/routes/routes";
import Toast from "react-native-toast-message";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <MyStack />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  );
}
