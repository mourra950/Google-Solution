import React from "react";
import FormComponent from "../../components/FormComponent";
import "../../styles/form.css";
import {data} from "./formdata"
import {  useParams } from 'react-router-dom';

const Form = () => {
  let { disease } = useParams();

  let result = data.filter(d=>d["title"]==disease)
  
  const formConfig =result[0].form

  const handleSubmit = (formData) => {
    console.log("Form data:", formData);
  };

  return (
    <div className="container width-adjust">
      <h1>{result[0].title}</h1>
      <FormComponent config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default Form;
