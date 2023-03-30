export const data = [
  {
    "title": "Diagnosis",
    "desc": "Complete this form to document your past and current diagnoses and illnesses, including as much information as possible, such as hospital names and any special notes or instructions.",
    "form": [
      { label: "Diagnosis", name: "name", type: "text", required: true },
      { label: "Description", name: "message", type: "text", required: true },
      { label: "Date of diagnosis", name: "date", type: "date", required: true }


    ],
    "type":"Diagnosis"
  },
  {
    "title": "Prescription",
    "desc": "Keep a record of any present or previous prescriptions. "
    ,
    "form": [

      { label: "Name", name: "name", type: "text", required: true },
      { label: "Dosage", name: "dosage", type: "text", required: true },
      { label: "Date of the first intake", name: "date", type: "date", required: true }
      
    ],
    "type":"Prescription"
  },
  {
    "title": "Contact",
    "desc": "Fill out a form to include emergency contact information in your profile, allowing you to reach out to them in the event of an emergency. You may also include the contact details of your responsible doctor.",
    "form": [

      { label: "Name", name: "name", type: "text", required: true },
      { label: "Relation", name: "relation", type: "text", required: true },
      { label: "Phone Number", name: "phonenumber", type: "text", required: true }


    ],
    "type":"Contacts"
  }
]