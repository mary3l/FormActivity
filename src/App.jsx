import { useState } from "react";
import "./App.css";
import Form from "./components/form";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const checkLogin = () => {
    if (formData.username == "root" && formData.password == "root") {
      alert("Login Successfully");
    } else {
      alert("Login Failed");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <>
      <Form
        formData={formData}
        handleInputChange={handleInputChange}
        checkLogin={checkLogin}
      />
    </>
  );
}

export default App;
