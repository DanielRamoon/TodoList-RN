import { Button, StyleSheet } from "react-native";
import { theme } from "../../Theme/index";

export const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: theme.colors.base.gray700,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 173,
    position: "relative",
  },
  form: {
    height: 54,
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -54 / 2,
  },
  input: {
    height: 54,
    width: "75%",
    backgroundColor: theme.colors.base.gray500,
    color: theme.colors.base.gray100,
    borderRadius: 5,
    padding: 16,
    marginRight: 4,
    fontSize: theme.font_size.md,
    borderColor: theme.colors.base.gray700,
    borderWidth: 1,
  },
  inputBorder: {
    borderColor: theme.colors.brand.purple,
  },
  button: {
    height: 54,
    width: 54,
    borderRadius: 5,
    backgroundColor: theme.colors.brand.blue_dark,
    alignItems: "center",
    justifyContent: "center",
  },
});
