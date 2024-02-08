// ColumnConfigForm.js
import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const ColumnConfigForm = ({ onSubmit }) => {
  const [header, setHeader] = useState('');
  const [jql, setJql] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ header, jql });
    setHeader('');
    setJql('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Column Header"
        variant="outlined"
        value={header}
        onChange={(e) => setHeader(e.target.value)}
        required
      />
      <TextField
        label="JQL Filter"
        variant="outlined"
        value={jql}
        onChange={(e) => setJql(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">Add/Modify Column</Button>
    </Box>
  );
};

export default ColumnConfigForm;