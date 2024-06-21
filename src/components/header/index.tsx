import React from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Task,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import { theme } from "../../Theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type HeaderProps = {
  inputRef: React.RefObject<TextInput>;
  task: string;
  onChangeText: (tasks: string) => void;
  onPrass: () => void;
};

const Header = ({ task, inputRef, onChangeText, onPrass }: HeaderProps) => {
  return (
    <View style={styles.HeaderContainer}>
      <Image source={Logo} />
      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            inputRef.current?.isFocused() && task ? styles.inputBorder : null,
          ]}
          placeholder="Adicone uma nova tarefa"
          placeholderTextColor={theme.colors.base.gray300}
          value={task}
          onChangeText={onChangeText}
          ref={inputRef}
          autoCorrect={false}
          onSubmitEditing={onPrass}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.button} onPress={onPrass}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={30}
            color={theme.colors.base.gray100}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
