// KanbanCard.js
import React from 'react';
import { Card, CardContent, Typography, Chip, Avatar } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport'; // Example icon for issue type
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'; // Example icon for priority level

const KanbanCard = ({ issue }) => {
  return (
    <Card style={{ marginBottom: '10px', width: '450px' }}>
      <CardContent>
        <Typography variant="h6">{issue.summary}</Typography>
        <Typography variant="body2">Key: {issue.key}</Typography>
        <Chip icon={<BugReportIcon />} label={issue.type} />
        <Chip icon={<PriorityHighIcon />} label={issue.priority} />
        <Typography variant="body2">Support-Segments: {issue.supportSegments}</Typography>
        <div>
          {issue.assignees.map((assignee, index) => (
            <Avatar key={index} src={assignee.avatarUrl} alt={assignee.name} style={{ marginRight: '5px' }} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KanbanCard;