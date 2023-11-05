import { render } from "react-dom";
import React, { useState, useEffect, Component } from 'react';
import { Paper, Typography, Input, Button } from "@material-ui/core";

function EnterDataPage(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Handle the image upload to your backend here
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Upload a Food Image
      </Typography>
      <Input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
    </Paper>
  );
}

export default EnterDataPage;