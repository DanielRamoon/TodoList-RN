import React from "react";
import { ActivityIndicator, View } from "react-native";
import { theme } from "../../Theme";
import { styles } from "./styles";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color={theme.colors.brand.blue} />
    </View>
  );
};

export default Loading;
