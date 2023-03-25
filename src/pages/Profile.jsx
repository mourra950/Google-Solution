/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { googleprovider, auth, db } from "../firebaseconfig";
import { useParams } from 'react-router-dom';
import { doc, getDoc, getDocs, addDoc, collection, query, where } from "firebase/firestore";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Tab,
  Tabs,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../styles/Profile.css";
import { QRCode, Button } from "antd";
import data from "../data.json";
import ConfusedImage from "../images/confused.jpg";
import BasicCard from "../components/Emergencycontact";
import BasicAccordion from "../components/BasicAcordion";

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

function MedicalRecord({ record }) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Grid container spacing={2}>
          {record.diabetes ? (
            <>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" gutterBottom>
                  Diabetes type: {record.diabetes_data.type}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" gutterBottom>
                  Blood sugar level: {record.diabetes_data.sugar}
                </Typography>
              </Grid>
            </>
          ) : (
            <Grid item xs={12}>
              <img
                src={ConfusedImage}
                alt="Confused"
                style={{ width: "70%" }}
              />
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function Profile() {
  let { profileId } = useParams();
  const [value, setValue] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [Diagnosis, setDiagnosis] = useState([]);

  async function getinfo() {
    const docRef = collection(db, "Contacts");
    const q = query(docRef, where("userId", "==", profileId));
    const querySnapshot = await getDocs(q);
    const newContacts = [];
    querySnapshot.forEach((doc) => {
      // Push each contact object to the newContacts array
      newContacts.push(doc.data());
    });
    // Update the state array with the newContacts array
    setContacts(newContacts);
    const docRef1 = collection(db, "Diagnosis");
    const q1 = query(docRef1, where("userId", "==", profileId));
    const querySnapshot1 = await getDocs(q1);
    const newDiagnosis = [];
    querySnapshot1.forEach((doc) => {
      // Push each contact object to the newContacts array
      newDiagnosis.push(doc.data());
    });
    // Update the state array with the newContacts array
    setDiagnosis(newDiagnosis);
  }

  useEffect(() => {
    getinfo();
    // Call the testdb function when the component mounts and authUser is true

  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const patientName = data[0].name;

  return (
    <>
      <h2 className="t">{patientName}</h2>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className="tabs_profile" label="Emergency Contact" {...a11yProps(0)} />
            <Tab className="tabs_profile" label="Medical History" {...a11yProps(1)} />
            <Tab className="tabs_profile" label="User ID" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="cards-grid">

            {contacts.map((contact, index) => (
              <BasicCard name={contact.name} relation={contact.relation} phonenumber={contact.phonenumber} />
            ))}


          </div>

        </TabPanel>
        <TabPanel value={value} index={1}>
        {Diagnosis.map((diagnosis, index) => (
              <BasicAccordion name={diagnosis.name} message={diagnosis.message}  />
            ))}


        </TabPanel>
        <TabPanel value={value} index={2}>
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
              value={profileId}
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


// async function testdb() {
//   const docRef = collection(db, "Contacts");
//   const q = query(docRef, where("userId", "==", auth.currentUser.uid));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots

//   });

// }