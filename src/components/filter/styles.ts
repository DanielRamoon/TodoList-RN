import { StyleSheet } from "react-native";
import { theme } from "../../Theme";

export const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: theme.colors.base.gray700,
    borderRadius: 10,
    marginVertical: 10,
  },
  filter: {
    fontSize: 16,
    color: theme.colors.base.gray300,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedFilter: {
    fontSize: 16,
    color: theme.colors.brand.purple,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.brand.blue_dark,
  },
});
