// eslint-disable-next-line no-unused-vars
import React from "react";

const inputField = ({ id, label, value, onChange, type }) => {
  return (
    <div className="mb-4 p-2">
      <label className="flex text-gray-700">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="border-2 rounded-lg p-2 w-[25rem] focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
};

export default inputField;
