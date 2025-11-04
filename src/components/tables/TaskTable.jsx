import React from "react";
import EditBtn from "../buttons/EditBtn";
import DeleteBtn from "../buttons/DeleteBtn";

function TaskTable({ list, onEdit, onDelete, onToggle }) {
  if (list.length === 0) {
    return (
      <p className="text-center text-gray-500 italic mt-6">
        No tasks found. Add a new task!
      </p>
    );
  }

  return (
    <div className="overflow-x-auto mt-6 shadow-md rounded-lg">
      <table className="min-w-full border border-gray-200 text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-800 uppercase text-xs tracking-wider">
          <tr>
            <th className="px-4 py-3 border-b">Name</th>
            <th className="px-4 py-3 border-b">Description</th>
            <th className="px-4 py-3 border-b">Task Status</th>
            <th className="px-4 py-3 border-b">Action</th>
            <th className="px-4 py-3 border-b">Toggle Task</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {list.map((t, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-50 transition ${
                t.status ? "bg-green-50" : "bg-white"
              }`}
            >
              <td className="px-4 py-3 font-medium text-gray-900">
                {t.taskName}
              </td>
              <td className="px-4 py-3">{t.description}</td>
              <td
                className={`px-4 py-3 font-semibold ${
                  t.status ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {t.status ? "✅ Done" : "⌛ Pending"}
              </td>
              <td className="px-4 py-3 flex items-center space-x-2">
                <EditBtn onClick={() => onEdit(index)} />
                <DeleteBtn onClick={() => onDelete(index)} />
              </td>
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={t.status}
                  onChange={() => onToggle(index)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
