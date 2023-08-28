import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import TasksList from "./Components/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { task: newTask, class: "notCompleted" },
    ]);
    console.log(tasks);
  };

  const deleteTask = (item) => {
    const delTasks = tasks.filter((task) => task.task !== item);
    setTasks([...delTasks]);
  };

  const setCompleted = (item) => {
    const completedTask = tasks.map((task) =>
      task.task === item
        ? task.class === "notCompleted"
          ? { ...task, class: "completed" }
          : { ...task, class: "notCompleted" }
        : task
    );
    setTasks([...completedTask]);
    console.log(item);
  };

  return (
    <div className="App">
      <h1>My Tasks</h1>
      <Input addTask={addTask} />
      <TasksList
        tasks={tasks}
        deleteTask={deleteTask}
        setCompleted={setCompleted}
      />
    </div>
  );
}

export default App;
