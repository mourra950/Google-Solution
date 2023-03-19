import React from "react";
import FormComponent from "../../components/FormComponent";
import "../../styles/form.css";

const Form = () => {
  const formConfig = [
    // { label: "Name", name: "name", type: "text", required: true },
    // { label: "Email", name: "email", type: "email", required: true },
    // { label: "Password", name: "password", type: "password", required: true },
    {
      label: "Type",
      name: "Type",
      type: "select",
      required: true,
      choices: [
        { label: "Type 1", value: "user" },
        { label: "Type 2", value: "admin" },
      ],
    },
  ];

  const handleSubmit = (formData) => {
    console.log("Form data:", formData);
  };

  return (
    <div className="container width-adjust">
      <h1>Diabetes</h1>
      <FormComponent config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default Form;
