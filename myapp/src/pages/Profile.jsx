import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import "../styles/Profile.css";
import { QRCode, Button } from "antd";
import data from "../data.json";
import ConfusedImage from "../images/confused.jpg";

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
  const [value, setValue] = useState(0);

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
            <Tab label="Emergency Contact" {...a11yProps(0)} />
            <Tab label="Medical History" {...a11yProps(1)} />
            <Tab label="Your ID" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item On1
        </TabPanel>
        <TabPanel value={value} index={1}>
          {data.map((record, index) => (
            <MedicalRecord key={index} record={record} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography style={{ textAlign: "center", color: "white" }}>
            That is your ID you can engrave this number on any items that you
            wear every day or you can print the Qr code
            <br />
            ID: 12123
          </Typography>
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
              value="http://localhost:3000/profile/12123"
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
