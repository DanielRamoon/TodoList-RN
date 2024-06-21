import { Button, StyleSheet } from "react-native";
import { theme } from "../../Theme/index";

export const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  imageLogin: {
    width: "100%",
  },
  TextInputLogin: {
    height: 54,
    width: "75%",
    backgroundColor: theme.colors.base.gray500,
    color: theme.colors.base.gray100,
    borderRadius: 15,
    padding: 16,
    marginRight: 4,
    marginTop: 40,
    fontSize: theme.font_size.md,
    borderColor: theme.colors.brand.purple,
    borderWidth: 1,
  },
  ButtonLogin: {
    height: 54,
    width: "70%",
    marginTop: 24,
    borderRadius: 15,
    backgroundColor: theme.colors.brand.blue_dark,
    alignItems: "center",
    justifyContent: "center",
  },
  TextButtonLogin: {
    color: theme.colors.base.gray100,
    fontSize: theme.font_size.md,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    left: 100,
    top: -40,
  },
});
