import AsyncStorage from "@react-native-async-storage/async-storage";
import { TasksType } from "../tasksType/types";

const TASKS_STORAGE_KEY = "@tasks";

export const loadTasks = async (): Promise<TasksType[]> => {
  try {
    const savedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
    return savedTasks != null ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error("Erro ao carregar tarefas do AsyncStorage", error);
    return [];
  }
};

export const saveTasks = async (tasks: TasksType[]) => {
  try {
    await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Erro ao salvar tarefas no AsyncStorage", error);
  }
};
