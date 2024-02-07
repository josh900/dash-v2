import React, { useState, useEffect } from 'react';
import KanbanColumn from './KanbanColumn';
import { fetchJiraIssues } from '../lib/jira';

export default function KanbanBoard({jql}) {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        fetchJiraIssues(jql).then(data => setIssues(data.issues));
    }, [jql]);

    return (
        <div className="flex space-x-4">
            <KanbanColumn issues={issues} />
        </div>
    );
}