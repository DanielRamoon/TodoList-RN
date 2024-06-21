import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, Alert, TextInput } from "react-native";
import { styles } from "./styles";
import Header from "../../components/header";
import Tasks from "../../components/tasks";
import { TasksType } from "../../tasksType/types";
import { Empty } from "../../components/empty";
import { uuid } from "../../utils/uid";
import { loadTasks, saveTasks } from "../../storage/index";

const HomeScreens = () => {
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [newTasks, setNewTasks] = useState("");
  const newTaskInputRef = useRef<TextInput>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const savedTasks = await loadTasks();
      setTasks(savedTasks);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const handleTaskAdd = () => {
    if (newTasks.trim() !== "" && newTasks.length >= 5) {
      setTasks((task) => [
        ...task,
        { id: uuid(), isCompleted: false, title: newTasks.trim() },
      ]);
      setNewTasks("");
    }
    newTaskInputRef.current?.blur();
  };

  const handleDone = (id: string) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleDelete = (id: string) => {
    Alert.alert("Excluir tarefa", "Deseja excluir a tarefa?", [
      {
        text: "Sim",
        style: "default",
        onPress: () =>
          setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const totalTasks = tasks.length;
  const totalTasksCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <View style={styles.container}>
      <Header
        inputRef={newTaskInputRef}
        task={newTasks}
        onChangeText={setNewTasks}
        onPrass={handleTaskAdd}
      />
      <View style={styles.taskContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreate}>Criada</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasks}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.taskDone}>Concluída</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCompleted}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <Tasks
              onTaskDone={() => handleDone(item.id)}
              onTaskDelete={() => handleDelete(item.id)}
              {...item}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  );
};

export default HomeScreens;
