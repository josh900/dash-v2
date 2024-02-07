// app/components/KanbanCard.js
export default function KanbanCard({ issue }) {
    return (
      <div className="flex flex-col bg-white p-4 rounded mb-4">
        <h3 className="font-bold">{issue.fields.summary}</h3>
        {/* Display other issue details */}
      </div>
    );
  }