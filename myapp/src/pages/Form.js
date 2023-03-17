import React from "react";
import FormComponent from "../components/FormComponent";
import "../styles/form.css";

const Form = () => {
  const formConfig = [
    { label: "Name", name: "name", type: "text", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Password", name: "password", type: "password", required: true },
    {
      label: "Role",
      name: "role",
      type: "select",
      required: true,
      choices: [
        { label: "User", value: "user" },
        { label: "Admin", value: "admin" },
      ],
    },
  ];

  const handleSubmit = (formData) => {
    console.log("Form data:", formData);
  };

  return (
    <div className="container width-adjust">
      <h1>Example Form</h1>
      <FormComponent config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default Form;
