import React from "react";

function EditBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-1.5 rounded-lg shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
    >
      Edit
    </button>
  );
}

export default EditBtn;
