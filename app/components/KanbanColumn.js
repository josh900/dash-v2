// app/components/KanbanColumn.js
import KanbanCard from './KanbanCard';

export default function KanbanColumn({ status, issues }) {
  return (
    <div className="flex flex-col w-72 bg-gray-100 p-4 rounded">
      <h2 className="font-bold mb-2">{status}</h2>
      {issues.map(issue => (
        <KanbanCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}