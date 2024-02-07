export default function KanbanCard({ issue }) {
    return (
        <div className="p-4 mb-2 bg-white rounded shadow">
            <h3>{issue.fields.summary}</h3>
            {/* Add further details based on the issue's fields */}
        </div>
    );
}