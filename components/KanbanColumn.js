import React from 'react';
import KanbanCard from './KanbanCard';

export default function KanbanColumn({ issues }) {
    return (
        <div className="flex flex-col w-64 p-2 bg-gray-100 rounded">
            {issues.map(issue => (
                <KanbanCard key={issue.id} issue={issue} />
            ))}
        </div>
    );
}