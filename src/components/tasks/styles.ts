import { StyleSheet } from "react-native";
import { theme } from "../../Theme/index";

export const styles = StyleSheet.create({
  TasksContainer: {
    backgroundColor: theme.colors.base.gray500,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 64,
    flexDirection: "row",
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 8,
    borderLeftWidth: 1,
    borderColor: theme.colors.base.gray400,
  },
  textContainer: {
    width: "80%",
    height: 40,
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  textDone: {
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray300,
    textDecorationLine: "line-through",
  },
  TextCreated: {
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray100,
    textDecorationLine: "none",
  },
});
