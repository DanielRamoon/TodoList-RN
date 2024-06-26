import { StyleSheet } from "react-native";
import { theme } from "../../Theme";

export const styles = StyleSheet.create({
  TasksContainer: {
    backgroundColor: theme.colors.base.gray500,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 84, // Ajustei a altura para acomodar o conteúdo adicional da categoria
    flexDirection: "row",
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 8,
    borderLeftWidth: 1,
    borderColor: theme.colors.base.gray400,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 8,
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
  containerButton: {
    flexDirection: "row",
    marginLeft: -20,
  },
  categoryIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.base.gray700,
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: theme.colors.base.gray100,
    width: "80%",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: theme.font_size.md,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.base.gray400,
    borderRadius: 8,
    width: "100%",
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  buttonText: {
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray100,
  },
});
