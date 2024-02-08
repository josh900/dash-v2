// KanbanBoard.js
import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import initialColumns from './initialColumns';
import KanbanCard from './KanbanCard';
import fetchIssuesFromJira from './utils/jiraApi';

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [newColumn, setNewColumn] = useState({ header: '', jql: '' });

  useEffect(() => {
    const fetchAndMapIssues = async () => {
      const updatedColumns = await Promise.all(columns.map(async (column) => {
        const issues = await fetchIssuesFromJira(column.jql);
        return { ...column, issues }; // Add fetched issues to the column
      }));
      setColumns(updatedColumns);
    };

    fetchAndMapIssues();
  }, []); // Empty dependency array to run once on component mount


  const handleAddColumn = () => {
    setColumns([...columns, newColumn]);
    setNewColumn({ header: '', jql: '' }); // Reset form
  };


  return (
    <Grid container spacing={2} style={{ margin: '20px', overflow: 'auto' }}>
      {columns.map((column, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Paper style={{ padding: '10px', minHeight: '500px' }}>
            <Typography variant="h6" component="h2">
              {column.header}
            </Typography>
            {column.issues.map((issue) => (
              <KanbanCard key={issue.id} issue={issue} />
            ))}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KanbanBoard;


