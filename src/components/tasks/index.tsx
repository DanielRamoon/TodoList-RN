import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../Theme";
import { TasksType } from "../../tasksType/types";

type TasksProps = TasksType & {
  onTaskDone: (id: string) => void;
  onTaskDelete: (id: string) => void;
  onTaskEdit: (id: string, title: string) => void;
};

const Tasks = ({
  id,
  title,
  isCompleted,
  onTaskDone,
  onTaskDelete,
  onTaskEdit,
}: TasksProps) => {
  return (
    <View style={styles.TasksContainer}>
      <TouchableOpacity onPress={() => onTaskDone(id)}>
        <MaterialCommunityIcons
          name={
            isCompleted
              ? "checkbox-marked-circle-outline"
              : "checkbox-blank-circle-outline"
          }
          size={22}
          color={
            isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue
          }
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={isCompleted ? styles.textDone : styles.TextCreated}>
          {title}
        </Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={() => onTaskEdit(id, title)}>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={22}
            color={theme.colors.base.gray300}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTaskDelete(id)}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={22}
            color={theme.colors.base.gray300}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tasks;
