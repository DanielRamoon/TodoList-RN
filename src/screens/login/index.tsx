import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
  Animated,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import { RoutesProps } from "../../routes/routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../Theme";

type LoginScreenNavigationProp = StackNavigationProp<RoutesProps, "Login">;
type Props = {
  navigation: LoginScreenNavigationProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [animationOpacity] = useState(new Animated.Value(1));

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (username === "admin" && password === "user@123") {
        Animated.timing(animationOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          navigation.navigate("Home");
        });
      } else {
        Alert.alert("Username ou password inválida");
      }
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.containerLogin}>
      <Image source={Logo} />
      <TextInput
        style={styles.TextInputLogin}
        placeholder="Digite seu username"
        placeholderTextColor={theme.colors.brand.purple}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.TextInputLogin}
        placeholder="Digite sua senha"
        placeholderTextColor={theme.colors.brand.purple}
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <MaterialCommunityIcons
          name={isPasswordVisible ? "eye" : "eye-off"}
          size={25}
          color={theme.colors.brand.purple}
          style={styles.iconContainer}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonLogin} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size={25} color={theme.colors.brand.purple} />
        ) : (
          <Text style={styles.TextButtonLogin}>ENTRAR</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Login;
