export default function Task({ id, texto, formattedText, onDelete }) {
	const handleCheckboxChange = async () => {
	  try {
		const response = await fetch('/api/deleteTask', {
		  method: 'DELETE',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ id }),
		});
		const data = await response.json();
		if (data.message === 'Task deleted successfully') {
		  onDelete(id);
		} else {
		  console.error('Failed to delete task:', data);
		}
	  } catch (error) {
		console.error('Error deleting task:', error);
	  }
	};
  
	return (
	  <div className="flex ml-14 gap-3">
		<input
		  className="cursor-pointer custom-checkbox"
		  type="checkbox"
		  id={`task-checkbox-${id}`}
		  onChange={handleCheckboxChange}
		/>
		<label htmlFor={`task-checkbox-${id}`} className="text-input" dangerouslySetInnerHTML={{ __html: formattedText }}>
		</label>
	  </div>
	);
  }
  