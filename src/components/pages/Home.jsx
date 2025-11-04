import React, { useEffect, useState } from "react";
import TaskForm from "../forms/TaskForm";
import TaskTable from "../tables/TaskTable";

function Home() {
  const LIST_KEY = "taskList";
  const [list, setList] = useState(JSON.parse(localStorage.getItem(LIST_KEY))||[]);
  const [task, setTask] = useState({
    taskName: "",
    status: false,
    description: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  //  Load tasks from localStorage
  useEffect(() => {
    try {
      const savedList = JSON.parse(localStorage.getItem(LIST_KEY));
      if (savedList) setList(savedList);
    } catch (error) {
      console.error("Error reading localStorage:", error);
    }
  }, []);

  //  Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem(LIST_KEY, JSON.stringify(list));
  }, [list]);

  //  Add or Update Task
  const handleFormData = (e) => {
    e.preventDefault();
    if (!task.taskName.trim()) return alert("Please enter a task name");

    if (editIndex !== null) {
      const updatedList = list.map((t, i) => (i === editIndex ? task : t));
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, task]);
    }
    setTask({ taskName: "", status: false, description: "" });
  };

  //  Toggle Status
  const handleStatus = (index) => {
    setList(
      list.map((t, i) => (i === index ? { ...t, status: !t.status } : t))
    );
  };

  //  Edit Task
  const handleEdit = (index) => {
    setTask(list[index]);
    setEditIndex(index);
  };

  //  Delete Task
  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <TaskForm
        task={task}
        editIndex={editIndex}
        onChange={setTask}
        onSubmit={handleFormData}
      />
      <TaskTable
        list={list}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggle={handleStatus}
      />
    </div>
  );
}

export default Home;
