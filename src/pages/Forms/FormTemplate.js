import React from "react";
import FormComponent from "../../components/FormComponent";
import "../../styles/form.css";
import { data } from "./formdata"
import { useParams } from 'react-router-dom';
import { auth, db } from "../../firebaseconfig";
import {  addDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const Form = () => {
  let { disease } = useParams();
  const navigate = useNavigate();
  let result = data.filter(d => d["title"] == disease)

  const formConfig = result[0].form



  const handleSubmit = async (formData, Config) => {
    let con = Config[0]
    if (con.type == "Contacts") {
      console.log(formData)
      await addDoc(collection(db, "Contacts"), {
        "userId": auth.currentUser.uid,
        name: formData.name,
        relation: formData.relation,
        phonenumber: formData.phonenumber

      })
    }
    else if (con.type == "Prescription") {
      await addDoc(collection(db, "Prescription"), {
        "userId": auth.currentUser.uid,
        name: formData.name,
        "dosage": formData.dosage,
        "date": formData.date
      })
    }
    else if (con.type == "Diagnosis") {
      await addDoc(collection(db, "Diagnosis"), {
        "userId": auth.currentUser.uid,
        "name": formData.name,
        "message": formData.message,
        "date":formData.date
      })
    }
    navigate("/");
  }

  return (
    <div className="container width-adjust">
      <h1 style={{marginBottom:"20px",fontSize:"3rem"}}>{result[0].title}</h1>
      <FormComponent result={result} config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default Form;
