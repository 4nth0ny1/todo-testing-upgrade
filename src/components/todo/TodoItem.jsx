export default function TodoItem({ todo }) {
  const { id, content } = todo;
  return (
    <div data-testid="TodoItem">
      <p data-testid="content">
        {id}: {content}
      </p>
    </div>
  );
}
