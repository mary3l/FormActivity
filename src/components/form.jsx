// eslint-disable-next-line no-unused-vars
import React from "react";
import InputField from "./inputField";
import Button from "./button";

function form({ formData, handleInputChange, checkLogin }) {
  const isFormInvalid = !formData.username || !formData.password;

  return (
    <div
      data-testid="app-container"
      className="flex items-center justify-center h-screen"
    >
      <form className="bg-white p-10 shadow-md rounded-lg flex flex-col items-center">
        <label>
          Username
          <InputField
            id="username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password
          <InputField
            id="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <div className="mt-4">
          <Button
            disabled={isFormInvalid}
            text="Login"
            onClick={() => checkLogin()}
          />
        </div>
      </form>
    </div>
  );
}
export default form;
