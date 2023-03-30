
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseconfig";
import { useParams } from "react-router-dom";
import {
  doc,
  getDocs,
  collection,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import "../styles/Profile.css";
import { QRCode, Button } from "antd";
import BasicCard from "../components/Emergencycontact";
import BasicAccordion from "../components/BasicAcordion";
import EditContact from "../components/EditContact";
import EditDiagnosis from "../components/EditDiagnosis";
import EditPrescription from "../components/EditPrescription";


const downloadQRCode = () => {
  const canvas = document.getElementById("myqrcode")?.querySelector("canvas");
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.download = "QRCode.png";
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  let { profileId } = useParams();
  const [value, setValue] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [Diagnosis, setDiagnosis] = useState([]);
  const [Prescription, setPrescription] = useState([]);


  async function getinfo() {

    const docRef = collection(db, "Contacts");
    const q = query(docRef, where("userId", "==", profileId));
    const querySnapshot = await getDocs(q);
    const newContacts = [];
    querySnapshot.forEach((doc) => {
      newContacts.push({ ...doc.data(), id: doc.id });
    });
    setContacts(newContacts);

    const docRef1 = collection(db, "Diagnosis");
    const q1 = query(docRef1, where("userId", "==", profileId));
    const querySnapshot1 = await getDocs(q1);
    const newDiagnosis = [];
    querySnapshot1.forEach((doc) => {
      newDiagnosis.push({ ...doc.data(), id: doc.id });
    });
    setDiagnosis(newDiagnosis);

    const docRef2 = collection(db, "Prescription");
    const q2 = query(docRef2, where("userId", "==", profileId));
    const querySnapshot2 = await getDocs(q2);
    const newPre = [];

    querySnapshot2.forEach((doc) => {
      newPre.push({ ...doc.data(), id: doc.id });
    });
    setPrescription(newPre);
  }

  async function handleDeleteContact(contactId) {
    const docRef = doc(db, "Contacts", contactId);
    await deleteDoc(docRef);
    getinfo(); // Refresh the contacts list after deleting
  }

  async function handleDeleteDiagnosis(diagnosisId) {
    const docRef = doc(db, "Diagnosis", diagnosisId);
    await deleteDoc(docRef);
    getinfo(); // Refresh the diagnosis list after deleting
  }
  async function handleDeletePrescription(prescriptionsId) {
    const docRef = doc(db, "Prescription", prescriptionsId);
    await deleteDoc(docRef);
    getinfo(); // Refresh the diagnosis list after deleting
  }


  async function handleUpdateContact(updatedContact) {
    const docRef = doc(db, "Contacts", updatedContact.id);
    await updateDoc(docRef, {
      name: updatedContact.name,
      relation: updatedContact.relation,
      phonenumber: updatedContact.phonenumber,
    });
    getinfo(); // Refresh the contacts list after updating
  }

  async function handleUpdateDiagnosis(updatedDiagnosis) {
    const docRef = doc(db, "Diagnosis", updatedDiagnosis.id);
    await updateDoc(docRef, {
      name: updatedDiagnosis.name,
      message: updatedDiagnosis.message,
    });
    getinfo(); // Refresh the diagnosis list after updating
  }
  async function handleUpdatePrescription(updatedPrescription) {
    const docRef = doc(db, "Prescription", updatedPrescription.id);
    await updateDoc(docRef, {
      name: updatedPrescription.name,
      dosage: updatedPrescription.dosage,
    });
    getinfo(); // Refresh the diagnosis list after updating
  }

  useEffect(() => {
    getinfo();

  }, [profileId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>


      <Box sx={{ width: "100%", backgroundColor: "#003459" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="tabs_profile"
              label="Emergency Contact"

              {...a11yProps(0)}
            />
            <Tab
              className="tabs_profile"
              label="Medical History"
              {...a11yProps(1)}
            />
            <Tab className="tabs_profile" label="User ID" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            {contacts.map((contact, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <div >
                  <BasicCard
                    name={contact.name}
                    relation={contact.relation}
                    phonenumber={contact.phonenumber}
                  />
                  {auth?.currentUser?.uid === profileId && (
                    <EditContact style={{ background: "white" }}
                      contact={contact}
                      onUpdate={handleUpdateContact}
                      onDelete={handleDeleteContact}
                    />
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>

          {Diagnosis.map((diagnosis, index) => (
            <>
              <BasicAccordion
                name={diagnosis.name}
                message={diagnosis.message}
                date={diagnosis.date}

              />
              {auth?.currentUser?.uid === profileId && (
                <EditDiagnosis
                  diagnosis={diagnosis}
                  onUpdate={handleUpdateDiagnosis}
                  onDelete={handleDeleteDiagnosis}
                />
              )}
            </>
          ))}
          {Prescription.map((prescription, index) => (
            <>
              <BasicAccordion
                name={prescription.name}
                message={"dosage :" + prescription.dosage}
                date={prescription.date}

              />
              {auth?.currentUser?.uid === profileId && (
                <EditPrescription
                  prescription={prescription}
                  onUpdate={handleUpdatePrescription}
                  onDelete={handleDeletePrescription}
                />
              )}
            </>
          ))}
        </TabPanel>

        <TabPanel value={value} index={2} >
          <div style={{ textAlign: "center", color: "white" }}>
            That is your ID you can engrave this number on any items that you
            wear every day or you can print the Qr code
            <br />
            ID: {profileId}
          </div>
          <div
            style={{
              paddingTop: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            id="myqrcode"
          >
            <QRCode
              value={"https://global-care-go.web.app/profile/" + profileId}
              style={{
                marginBottom: 16,
              }}
              size={300}
              className="ahmed"
            />
            <Button type="primary" onClick={downloadQRCode}>
              Download
            </Button>
          </div>
        </TabPanel>
      </Box>
    </>
  );
}
