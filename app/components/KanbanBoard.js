// app/components/KanbanBoard.js
import { useState, useEffect } from 'react';
import { fetchJiraIssues } from '../api/jira';
import KanbanColumn from './KanbanColumn';

export default function KanbanBoard({ jql }) {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchJiraIssues(jql)
      .then(data => setIssues(data.issues))
      .catch(console.error);
  }, [jql]);

  // Split issues into columns based on their status
  const columns = issues.reduce((cols, issue) => {
    const status = issue.fields.status.name;
    if (!cols[status]) cols[status] = [];
    cols[status].push(issue);
    return cols;
  }, {});

  return (
    <div className="flex space-x-4">
      {Object.entries(columns).map(([status, issues]) => (
        <KanbanColumn key={status} status={status} issues={issues} />
      ))}
    </div>
  );
}