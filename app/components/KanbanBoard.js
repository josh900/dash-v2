// KanbanBoard.js
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import initialColumns from './initialColumns';
import KanbanCard from './KanbanCard';
import fetchIssuesFromJira from '/utils/jiraApi';
import ColumnConfigForm from './ColumnConfigForm'; // Import the form component

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    const fetchAndMapIssues = async () => {
      const updatedColumns = await Promise.all(columns.map(async (column) => {
        const issues = await fetchIssuesFromJira(column.jql);
        return { ...column, issues }; // Add fetched issues to the column
      }));
      setColumns(updatedColumns);
    };

    fetchAndMapIssues();
  }, [columns]); 

  const handleAddModifyColumn = (columnConfig) => {
    const updatedColumns = [...columns, columnConfig];
    setColumns(updatedColumns);
  };

  return (
    <Box>
      <ColumnConfigForm onSubmit={handleAddModifyColumn} />
      <Grid container spacing={2} style={{ margin: '20px', overflow: 'auto' }}>
        {columns.map((column, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Paper style={{ padding: '10px', minHeight: '500px' }}>
              <Typography variant="h6" component="h2">
                {column.header}
              </Typography>
              {column.issues && column.issues.map((issue) => (
                <KanbanCard key={issue.id} issue={issue} />
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KanbanBoard;
