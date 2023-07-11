export default function TodoItem({ todo, deleteTodo }) {
  const { id, content } = todo;
  return (
    <div data-testid="TodoItem">
      <p data-testid="content">
        {id}: {content}
      </p>
      <button onClick={() => deleteTodo(id)} data-testid="delete-button">
        delete
      </button>
    </div>
  );
}
