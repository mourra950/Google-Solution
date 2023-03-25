export const data = [
  {
    "title": "Diagnosis",
    "desc": "Fill this form to store past/current diagnosis/diseases",
    "form": [
      { label: "Diagnosis", name: "name", type: "text", required: true },
      { label: "Description or any note ", name: "message", type: "text", required: true },
      { label: "Date yyyy/mm/dd", name: "date", type: "text", required: true }


    ],
    "type":"Diagnosis"
  },
  {
    "title": "Prescription",
    "desc": "Store information about any current/past prescription "
    ,
    "form": [

      { label: "Name", name: "name", type: "text", required: true },
      { label: "Dosage", name: "dosage", type: "text", required: true },
      { label: "Date yyyy/mm/dd", name: "date", type: "text", required: true }
      
    ],
    "type":"Prescription"
  },
  {
    "title": "Contact",
    "desc": "form to fill emergency contacts for your profile to be able to contact any of them in case of emergency ",
    "form": [

      { label: "Name", name: "name", type: "text", required: true },
      { label: "Relation", name: "relation", type: "text", required: true },
      { label: "Phone Number", name: "phonenumber", type: "text", required: true }


    ],
    "type":"Contacts"
  }
]