import React from "react";

function TaskForm({ task, onChange, onSubmit, editIndex }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto mt-6 space-y-4 border border-gray-100"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        {editIndex !== null ? " Edit Task" : " Add New Task"}
      </h2>

      {/* Task Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-600 mb-1">
          Task Name
        </label>
        <input
          name="taskName"
          value={task.taskName}
          onChange={(e) => onChange({ ...task, taskName: e.target.value })}
          type="text"
          placeholder="Enter task name"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      {/* Status */}
      <div className="flex items-center space-x-2">
        <input
          name="status"
          type="checkbox"
          checked={task.status}
          onChange={(e) => onChange({ ...task, status: e.target.checked })}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
        />
        <label className="text-sm font-medium text-gray-700">Mark as done</label>
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-600 mb-1">
          Description
        </label>
        <input
          name="description"
          value={task.description}
          onChange={(e) => onChange({ ...task, description: e.target.value })}
          type="text"
          placeholder="Enter task details"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
      >
        {editIndex !== null ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
