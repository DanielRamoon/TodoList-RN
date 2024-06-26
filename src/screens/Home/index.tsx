import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, Alert, TextInput } from "react-native";
import { styles } from "./styles";
import Header from "../../components/header";
import Tasks from "../../components/tasks";
import { TasksType } from "../../tasksType/types";
import { Empty } from "../../components/empty";
import { uuid } from "../../utils/uid";
import { loadTasks, saveTasks } from "../../storage/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import FilterButtons from "../../components/filter";
import Toast from "react-native-toast-message";

const HomeScreens = () => {
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [newTasks, setNewTasks] = useState("");
  const [editTaskId, setEditTaskId] = useState<string | null>(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "all"
  );
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

  const handleTaskAddOrUpdate = () => {
    if (editTaskId) {
      handleTaskUpdate();
    } else if (newTasks.trim() !== "" && newTasks.length >= 5) {
      setTasks((task) => [
        ...task,
        { id: uuid(), isCompleted: false, title: newTasks.trim() },
      ]);
      setNewTasks("");
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Tarefa criada com sucesso!",
        visibilityTime: 3000,
      });
    }
    newTaskInputRef.current?.blur();
  };

  const handleTaskUpdate = () => {
    if (
      editTaskId &&
      editTaskTitle.trim() !== "" &&
      editTaskTitle.length >= 5
    ) {
      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === editTaskId
            ? { ...task, title: editTaskTitle.trim() }
            : task
        )
      );
      setEditTaskId(null);
      setEditTaskTitle("");
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Tarefa atualizada com sucesso!",
        visibilityTime: 3000,
      });
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
        onPress: () => {
          setTasks((tasks) => tasks.filter((task) => task.id !== id));
          Toast.show({
            type: "success",
            text1: "Sucesso",
            text2: "Tarefa excluída com sucesso!",
            visibilityTime: 3000,
          });
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const handleEditTask = (id: string, title: string) => {
    setEditTaskId(id);
    setEditTaskTitle(title);
    newTaskInputRef.current?.focus();
  };

  const totalTasks = tasks.length;
  const totalTasksCompleted = tasks.filter((task) => task.isCompleted).length;

  const filterTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "incomplete") return !task.isCompleted;
    return true;
  });

  return (
    <View style={styles.container}>
      <Header
        inputRef={newTaskInputRef}
        task={editTaskId ? editTaskTitle : newTasks}
        onChangeText={editTaskId ? setEditTaskTitle : setNewTasks}
        onPrass={handleTaskAddOrUpdate}
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

        <FilterButtons filter={filter} setFilter={setFilter} />

        <FlatList
          data={filterTasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <Tasks
              onTaskDone={() => {
                handleDone(item.id);
                Toast.show({
                  type: "success",
                  text1: "Sucesso",
                  text2: "Estado da tarefa atualizado com sucesso!",
                  visibilityTime: 3000,
                });
              }}
              onTaskDelete={() => handleDelete(item.id)}
              onTaskEdit={() => handleEditTask(item.id, item.title)}
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
