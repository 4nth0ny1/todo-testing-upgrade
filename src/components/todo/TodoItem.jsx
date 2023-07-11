export default function TodoItem({ todo }) {
  return (
    <div data-testid="TodoItem">
      <p data-testid="content">
        {todo.id}: {todo.content}
      </p>
    </div>
  );
}
