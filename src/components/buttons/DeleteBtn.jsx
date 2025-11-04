import React from "react";

function DeleteBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1.5 rounded-lg shadow-sm transition-all duration-200 focus:ring-2 focus:ring-red-400 focus:outline-none"
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
