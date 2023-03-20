import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/Profile.css'
import { QRCode, Button } from 'antd';

const downloadQRCode = () => {
    const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
    if (canvas) {
        const url = canvas.toDataURL();
        const a = document.createElement('a');
        a.download = 'QRCode.png';
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Profile() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<>
        <h1 className='t'>Patient Name</h1>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Emergency Contact" {...a11yProps(0)} />
                    <Tab label="Medical History" {...a11yProps(1)} />
                    <Tab label="Your ID" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Item On1
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography style={{ textAlign: 'center', color: 'white' }}>
                    That is your ID you can engrave this number on any items that you wear every day or you can print the Qr code<br />
                    ID: 12123
                </Typography>
                <div style={{
                    paddingTop:"16px",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:'center'
                }}
                    id="myqrcode">
                    <QRCode
                        value="https://ant.design/"
                        style={{
                            marginBottom: 16,
                            
                        }}
                        size={300}
                        className='ahmed'
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