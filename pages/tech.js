// pages/tech.js
import React from 'react';
import KanbanBoard from '../app/components/KanbanBoard';

const TechPage = () => {
  return (
    <div>
      <h1>Tech Department</h1>
      {/* Include the KanbanBoard component */}
      <KanbanBoard />
      {/* You can add more widgets or content specific to the Tech department here */}
    </div>
  );
};

export default TechPage;