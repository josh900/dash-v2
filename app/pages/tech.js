import React from 'react';
import KanbanBoard from '../components/KanbanBoard';

export default function Tech() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Tech Department</h1>
            <KanbanBoard jql="project = TECH AND statusCategory != Done" />
        </div>
    );
}