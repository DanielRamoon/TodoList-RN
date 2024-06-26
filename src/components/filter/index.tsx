import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles"; // Importe o seu estilo específico

type FilterButtonsProps = {
  filter: "all" | "completed" | "incomplete";
  setFilter: (filter: "all" | "completed" | "incomplete") => void;
};

const FilterButtons = ({ filter, setFilter }: FilterButtonsProps) => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity onPress={() => setFilter("all")}>
        <Text style={filter === "all" ? styles.selectedFilter : styles.filter}>
          Todas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter("completed")}>
        <Text
          style={filter === "completed" ? styles.selectedFilter : styles.filter}
        >
          Concluídas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter("incomplete")}>
        <Text
          style={
            filter === "incomplete" ? styles.selectedFilter : styles.filter
          }
        >
          Não Concluídas
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButtons;
